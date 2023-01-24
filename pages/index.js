import Head from "next/head";
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from "./../data";
import { FlexContent, Hero, Sales, Stories, Footer, Header, Cart } from "./../components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nike Store</title>
        <meta name="description" content="Shop" />
        <link rel="icon" type="image/x-icon" href="./../public/nike.png"></link>
      </Head>
      <Header />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales data={popularsales} isPopularSection />
        <FlexContent data={highlight} isHighLightSection />
        <Sales data={toprateslaes} />
        <FlexContent data={sneaker} />
        <Stories data={story} />
      </main>
      <Footer data={footerAPI} />
    </>
  );
};

export default Home;
