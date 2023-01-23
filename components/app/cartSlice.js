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
  cartTotalAmount: 0,
  cartTotalCount: 0,
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

    setIncreaseProductsCount: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].productCount += 1;
        toast.success(`Item Count Increased`);
      }
      connectToLocalStorage(state.cartItems);
    },

    setDecreaseProductsCount: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (state?.cartItems[itemIndex].productCount > 1) {
        state.cartItems[itemIndex].productCount -= 1;
        toast.success(`Item Count Decreased`);
      }
      connectToLocalStorage(state.cartItems);
    },

    setClearProductsCount: (state) => {
      state.cartItems = [];
      connectToLocalStorage(state.cartItems);
      toast.success(`Cart Cleared successfully`);
    },

    setGetTotals: (state, action) => {
      const products = action.payload;
      const amounts = products.length !== 0 ? products.map((product) => product.price * product.productCount).reduce((a, b) => a + b) : 0;
      const counts = products.length !== 0 ? products.map((product) => product.productCount).reduce((a, b) => a + b) : 0;

      state.cartTotalCount = counts;
      state.cartTotalAmount = amounts;
    },
  },
});

export const cartState = (state) => state.cart.cartState;
export const cartProducts = (state) => state.cart.cartItems;

export const cartTotalAmount = (state) => state.cart.cartTotalAmount;
export const cartTotalCount = (state) => state.cart.cartTotalCount;

export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseProductsCount,
  setDecreaseProductsCount,
  setClearProductsCount,
  setGetTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
