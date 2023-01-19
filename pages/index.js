import Head from "next/head";
import { heroapi, popularsales, toprateslaes, highlight, sneaker } from "./../data";
import { FlexContent, Hero, Sales } from "./../components";

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
        <FlexContent data={highlight} isHighLightSection />
        <Sales data={toprateslaes} />
        <FlexContent data={sneaker} />
      </main>
    </>
  );
};

export default Home;
