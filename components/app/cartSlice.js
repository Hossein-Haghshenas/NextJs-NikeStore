import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartState: false,
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
  },
});

export const cartState = (state) => state.cart.cartState;

export const { setOpenCart, setCloseCart } = cartSlice.actions;

export default cartSlice.reducer;
