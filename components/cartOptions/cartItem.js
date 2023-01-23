import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setDecreaseProductsCount, setIncreaseProductsCount, setRemoveItemFromCart } from "../app/cartSlice";

const CartItem = ({ product: { id, title, text, img, color, shadow, price, productCount } }) => {
  const dispatch = useDispatch();

  const onRemoveProduct = () => {
    dispatch(setRemoveItemFromCart({ id, title, text, img, color, shadow, price, productCount }));
  };

  const onIncreaseProductCount = () => {
    dispatch(setIncreaseProductsCount({ id, title, text, img, color, shadow, price, productCount }));
  };
  const onDecreaseProductCount = () => {
    dispatch(setDecreaseProductsCount({ id, title, text, img, color, shadow, price, productCount }));
  };

  return (
    <>
      <section className="flex items-center justify-between w-full px-5">
        <section className="flex items-center gap-5">
          <section
            className={clsx("bg-gradient-to-b relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center", color, shadow)}
          >
            <Image src={img} alt={title} priority className="w-36 h-auto object-fill lg:w-28" />
            <section className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded">
              <span>${price}</span>
            </section>
          </section>
          <section className="grid items-center gap-4">
            <section className="grid items-center leading-none">
              <h2 className="font-medium text-lg text-slate-900 lg:text-sm">{title}</h2>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </section>
            <section className="flex items-center justify-around w-full">
              <button
                onClick={onDecreaseProductCount}
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
              <span className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:w-6 lg:h-5 flex items-center justify-center">
                {productCount}
              </span>
              <button
                onClick={onIncreaseProductCount}
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
            </section>
          </section>
        </section>
        <section className="grid items-center gap-5">
          <section className="grid items-center justify-center">
            <h3 className="text-lg lg:text-base text-slate-900 font-medium">${price * productCount}</h3>
          </section>
          <section className="grid items-center justify-center">
            <button
              onClick={onRemoveProduct}
              type="button"
              className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer"
            >
              <TrashIcon className="w-5 h-5 text-white" />
            </button>
          </section>
        </section>
      </section>
    </>
  );
};

export default CartItem;
