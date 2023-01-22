import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

// set cart products to the localStorage and use that
const connectToLocalStorage = (data) => {
  let haveData;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    data && localStorage.setItem("cart", JSON.stringify(data));
    haveData = localStorage.getItem("cart");
  }
  return haveData ? JSON.parse(localStorage.getItem("cart")) : [];
};

const initialState = {
  cartState: false,
  cartItems: connectToLocalStorage(),
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
        toast.success(`Item Count Increased`);
      } else {
        const temp = { ...action.payload, productCount: 1 };
        state.cartItems.push(temp);
        // create toast message
        toast.success(`${action.payload.title} added to Cart`);
      }
      connectToLocalStorage(state.cartItems);
    },
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id);
      state.cartItems = removeItem;
      connectToLocalStorage(state.cartItems);
      toast.success(`${action.payload.title} Removed from Cart`);
    },
  },
});

export const cartState = (state) => state.cart.cartState;
export const cartProducts = (state) => state.cart.cartItems;

export const { setOpenCart, setCloseCart, setAddItemToCart, setRemoveItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
