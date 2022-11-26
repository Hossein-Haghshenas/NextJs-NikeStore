import Head from 'next/head'
import { heroapi } from './../data'
import { Hero } from './../components';

const Home = () => {
  return (
    <>
      <Head>
        <title>Nike Store</title>
        <meta name="description" content="Shop" />
      </Head>
      <main>
        <Hero heroapi={heroapi} />
      </main>
    </>
  )
}

export default Home