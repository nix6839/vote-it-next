import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vote it!</title>
      </Head>
      <Layout>
        <h1>Hello, world!</h1>
      </Layout>
    </>
  );
}
