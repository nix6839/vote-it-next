import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PollCard from '../components/PollCard';
import { pollSummaries } from '../dummies/dummyPolls';

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Vote it!</title>
      </Head>
      <Layout>
        <PollListWrapper>
          <PollList>
            <li>
              <PollCard poll={pollSummaries[0]} />
            </li>
            <li>
              <PollCard poll={pollSummaries[1]} />
            </li>
          </PollList>
        </PollListWrapper>
      </Layout>
    </>
  );
}
