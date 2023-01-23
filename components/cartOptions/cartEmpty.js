import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import emptybag from "../../public/image/emptybag.png";

const CartEmpty = ({ onCartToggle }) => {
  return (
    <>
      <section className="flex items-center justify-center flex-col h-screen px-11 text-center gap-7">
        <Image src={emptybag} alt="" className="w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110" />
        <button
          onClick={onCartToggle}
          type="button"
          className="button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110"
        >
          <ArrowLeftIcon className="w-5 h-5 text-slate-900" />
          <span className="">Back To Nike Store</span>
        </button>
      </section>
    </>
  );
};

export default CartEmpty;
