import clsx from "clsx";
import { CartCount, CartEmpty, CartItem } from "./cartOptions";

const Cart = () => {
  return (
    <>
      <section className={clsx("fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[350]")}>
        <section className={clsx("blur-effect-theme h-screen max-w-xl w-full absolute right-0")}>
          <CartCount />
          <CartEmpty />
          <CartItem />
        </section>
      </section>
    </>
  );
};

export default Cart;
