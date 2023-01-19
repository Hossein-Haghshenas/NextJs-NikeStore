import Head from "next/head";
import { heroapi, popularsales, toprateslaes } from "./../data";
import { Hero, Sales } from "./../components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nike Store</title>
        <meta name="description" content="Shop" />
      </Head>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales data={popularsales} isPopularSection />
        <Sales data={toprateslaes} />
      </main>
    </>
  );
};

export default Home;
