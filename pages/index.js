import Head from 'next/head'
import data from './../data'
import { Hero } from './../components';

const Home = () => {
  return (
    <>
      <Head>
        <title>Nike Store</title>
        <meta name="description" content="Shop" />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  )
}

export default Home