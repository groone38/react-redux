import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  cart: any;
  amount: number;
  totalAmount: number;
  totalPrice: number;
}

const initialState: initialStateProps = {
  cart: [],
  amount: 0,
  totalAmount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(sate, action) {},
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
