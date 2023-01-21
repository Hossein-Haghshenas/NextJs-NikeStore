import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const Store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default Store;
