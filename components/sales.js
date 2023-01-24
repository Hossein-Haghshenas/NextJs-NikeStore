import React from "react";
import Card from "./utils/card";
import Title from "./utils/title";
import clsx from "clsx";

const Sales = ({ data, isPopularSection }) => {
  const { title, items } = data;
  return (
    <>
      <section className="nike-container mt-4">
        <Title title={title} />
        <section
          className={clsx(
            "grid items-center justify-items-center  gap-7 lg:gap-5 mt-7",
            isPopularSection ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1" : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          )}
        >
          {items?.map((item, index) => {
            return <Card key={item.id} {...item} isPopularSection={isPopularSection} />;
          })}
        </section>
      </section>
    </>
  );
};

export default Sales;
