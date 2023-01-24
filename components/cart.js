import clsx from "clsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartProducts, cartState, cartTotalAmount, cartTotalCount, setClearProductsCount, setCloseCart, setGetTotals } from "./app/cartSlice";
import { CartCount, CartEmpty, CartItem } from "./cartOptions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartVisibility = useSelector(cartState);
  const products = useSelector(cartProducts);
  const totalAmount = useSelector(cartTotalAmount);
  const totalCount = useSelector(cartTotalCount);

  useEffect(() => {
    if (products !== undefined) {
      dispatch(setGetTotals(products));
    }
  }, [products, dispatch]);

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearProductCount = () => {
    dispatch(setClearProductsCount());
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
          <CartCount onClearProductCount={onClearProductCount} onCartToggle={onCartToggle} totalCount={totalCount} />
          {products?.length !== 0 ? (
            <section>
              <section className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3 mt-10">
                {products.map((product) => {
                  return <CartItem key={product.id} product={product} />;
                })}
              </section>

              <section className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                <section className="flex items-center justify-between">
                  <h2 className="text-base font-semibold uppercase">Total</h2>
                  <h3 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">${totalAmount}</h3>
                </section>
                <section className="grid items-center gap-2">
                  <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                  <button type="button" className="button-theme bg-theme-cart text-white">
                    Check Out
                  </button>
                </section>
              </section>
            </section>
          ) : (
            <CartEmpty onCartToggle={onCartToggle} />
          )}
        </section>
      </section>
    </>
  );
};

export default Cart;
