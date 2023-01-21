import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

const CartCount = ({ onCartToggle }) => {
  return (
    <>
      <section className="bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full">
        <section className="flex items-center gap-3 ">
          <section className="grid items-center cursor-pointer">
            <ChevronDoubleLeftIcon className="w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]" />
          </section>
          <section className="grid items-center">
            <h1 className="text-base font-medium text-slate-900">
              Your Cart <span className="bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-xs">(Items)</span>
            </h1>
          </section>
        </section>
        <section className="flex items-center">
          <button onClick={onCartToggle} type="button" className="rounded bg-theme-cart active:scale-90 p-0.5">
            <XMarkIcon className="w-5 h-5 text-white stroke-[2]" />
          </button>
        </section>
      </section>
    </>
  );
};

export default CartCount;
