import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../app/cartSlice";

const Card = (props) => {
  const { isPopularSection, id, color, shadow, title, text, img, btn, rating, price } = props;

  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = { id, title, text, img, color, shadow, price };
    dispatch(setAddItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
    onAddToCart();
  };

  return (
    <>
      <section
        className={clsx(
          "relative bg-gradient-to-b grid items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105",
          color,
          shadow,
          isPopularSection ? "justify-items-start" : "justify-items-center"
        )}
      >
        <section className={clsx("grid items-center", isPopularSection ? "justify-items-start" : "justify-items-center")}>
          <h3 className=" text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">{title}</h3>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">{text}</p>

          <section className="flex items-center justify-between w-28 my-2">
            <section className="flex items-center bg-white/80 px-1 rounded blur-effect-theme">
              <h4 className="text-black text-sm font-medium">${price}</h4>
            </section>
            <section className="flex items-center gap-1">
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h4 className="text-slate-100 font-normal md:text-sm">{rating}</h4>
            </section>
          </section>

          <section className="flex items-center gap-3 ">
            <button onClick={onAddToCart} type="button" className="bg-white opacity-90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200">
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              onClick={onCartToggle}
              type="button"
              className="bg-white opacity-90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black "
            >
              {btn}
            </button>
          </section>
        </section>
        <section className={clsx(isPopularSection ? "absolute top-5 right-1" : "justify-center")}>
          <Image
            src={img}
            alt=""
            loading="lazy"
            className={clsx("transitions-theme hover:-rotate-12", isPopularSection ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]" : "h-36 w-64")}
          />
        </section>
      </section>
    </>
  );
};

export default Card;
