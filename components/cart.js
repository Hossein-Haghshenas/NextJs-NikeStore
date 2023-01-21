import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { cartState, setCloseCart } from "./app/cartSlice";
import { CartCount, CartEmpty, CartItem } from "./cartOptions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartVisibility = useSelector(cartState);
  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };
  return (
    <>
      <section
        className={clsx(
          "fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[350]",
          cartVisibility ? "opacity-100 visible translate-x-0" : "opacity-0 invisible translate-x-8"
        )}
      >
        <section className={clsx("blur-effect-theme h-screen max-w-xl w-full absolute right-0")}>
          <CartCount onCartToggle={onCartToggle} />
          <CartEmpty />
          <CartItem />
        </section>
      </section>
    </>
  );
};

export default Cart;
