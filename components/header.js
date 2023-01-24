import { useEffect, useState } from "react";
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import clsx from "clsx";
import logo from "./../public/image/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { cartTotalCount, setOpenCart } from "./app/cartSlice";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const totalCount = useSelector(cartTotalCount);

  const dispatch = useDispatch();
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        !navState
          ? "absolute top-7 left-0 right-0 opacity-100 z-50"
          : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[300] blur-effect-theme"
      )}
    >
      <nav className="flex items-center justify-between nike-container">
        <section className="flex items-center">
          <Image src={logo} alt="logo" className={clsx("w-16 h-auto", navState && "filter brightness-0")} />
        </section>
        <ul className="flex items-center justify-center gap-2">
          <li className="grid items-center">
            <MagnifyingGlassIcon className={clsx("icon-style", navState && "text-slate-900 transition-all duration-300")} />
          </li>
          <li className="grid items-center">
            <HeartIcon className={clsx("icon-style", navState && "text-slate-900 transition-all duration-300")} />
          </li>
          <li className="grid items-center">
            <button type="button" onClick={onCartToggle} className="border-none outline-none active:scale-110 transition-all duration-300 relative">
              <ShoppingBagIcon className={clsx("icon-style", navState && "text-slate-900 transition-all duration-300")} />
              <span
                className={clsx(
                  "absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300",
                  navState ? "bg-slate-900 text-slate-100 shadow-slate-900" : "bg-slate-100 text-slate-900 shadow-slate-100"
                )}
              >
                {totalCount}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
