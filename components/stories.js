import Title from "./utils/title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import NewsCard from "./utils/newsCard";

const Stories = ({ data: { title, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <>
      <section className="nike-container mb-11 mt-8">
        <Title title={title} />
        <section className="mt-7">
          <Splide options={splideOptions}>
            {news?.map((newsitem, index) => (
              <SplideSlide key={index} className="mb-0.5">
                <NewsCard {...newsitem} />
              </SplideSlide>
            ))}
          </Splide>
        </section>
      </section>
    </>
  );
};

export default Stories;
