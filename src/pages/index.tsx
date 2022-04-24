import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import PollLoadingIcon from '../components/icons/PollLoadingIcon';
import Layout from '../components/Layout';
import PollCard from '../components/PollCard';
import * as PollRequest from '../lib/PollRequest';
import { PollPaginationData } from '../types';

const PollListWrapper = styled.div`
  padding: 20px 16px;
`;

const MiddlePollLoadingIcon = styled(PollLoadingIcon)`
  display: block;
  margin: 0 auto;
`;

const PollList = styled.ul`
  margin: 0 auto;
  display: grid;
  column-gap: 24px;
  row-gap: 20px;
  transition: max-width 0.5s;
  max-width: 1200px;
  grid-template-columns: repeat(4, 1fr);
  @media only screen and (max-width: 1200px) {
    max-width: 900px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 768px) {
    max-width: 600px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

type Props = {
  initialPollPage: PollPaginationData;
};

export default function Home({ initialPollPage }: Props) {
  const { status, error, fetchNextPage, isFetchingNextPage, data } =
    useInfiniteQuery(
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

  const intersectRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const intersectTarget = intersectRef.current;
    if (intersectTarget === null) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });
    observer.observe(intersectTarget);
    return () => {
      observer.unobserve(intersectTarget);
    };
  }, [data, fetchNextPage]);

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

  const lastPollId = data.pages.at(-1)?.polls.at(-1)?.id;

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
                <li
                  key={poll.id}
                  ref={poll.id === lastPollId ? intersectRef : undefined}
                >
                  <PollCard poll={poll} />
                </li>
              )),
            )}
          </PollList>
          {isFetchingNextPage && <MiddlePollLoadingIcon />}
        </PollListWrapper>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const initialPollPage = await PollRequest.getPagination();
  return { props: { initialPollPage } };
};
