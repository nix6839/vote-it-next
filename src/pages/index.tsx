import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PollCard from '../components/PollCard';
import * as PollRequest from '../lib/PollRequest';
import { PollPaginationData } from '../types';

const PollListWrapper = styled.div`
  padding: 20px 16px;
`;

const PollList = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 20px;
`;

type Props = {
  initialPollPage: PollPaginationData;
};

export default function Home({ initialPollPage }: Props) {
  const { status, error, data } = useInfiniteQuery(
    ['inifinitePolls'],
    ({ pageParam }) => PollRequest.getPagination(pageParam),
    {
      initialData: {
        pages: [initialPollPage],
        pageParams: [undefined],
      },
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    },
  );

  /**
   * InitialData로 인해서 절대 트리거 되지 않음.
   * 현재 타입 가드 이슈로 인해 처리만 해놓음.
   * 참조: https://github.com/tannerlinsley/react-query/issues/3310
   */
  if (status === 'loading') {
    return <>Loading...</>;
  }

  if (status === 'error') {
    if (error instanceof Error) {
      return <p>{error.message}</p>;
    }
    return error;
  }

  return (
    <>
      <Head>
        <title>Vote it!</title>
      </Head>
      <Layout>
        <PollListWrapper>
          <PollList>
            {data.pages.map((page) =>
              page.polls.map((poll) => (
                <li key={poll.id}>
                  <PollCard poll={poll} />
                </li>
              )),
            )}
          </PollList>
        </PollListWrapper>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const initialPollPage = await PollRequest.getPagination();
  return { props: { initialPollPage } };
};
