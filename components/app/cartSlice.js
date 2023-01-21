import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartState: false,
  cartItems: [],
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
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].productCount += 1;
      } else {
        const temp = { ...action.payload, productCount: 1 };
        state.cartItems.push(temp);
      }
    },
  },
});

export const cartState = (state) => state.cart.cartState;

export const { setOpenCart, setCloseCart, setAddItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
