import { createSlice } from "@reduxjs/toolkit";

export interface Cart {
  id: string;
  price: number;
  name: string;
  img: string;
  amount: number;
  color: string;
  size: string;
  totalPrice: number;
}

interface initialStateProps {
  cart: Cart[];
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
    addToCart(state, action) {
      console.log(action);
      try {
        const exist = state.cart.find(
          (item: Cart) =>
            item.id === action.payload.id &&
            item.size === action.payload.size &&
            item.color === action.payload.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += action.payload.price;
        } else {
          state.cart.push(action.payload);
        }
        state.totalAmount++;
        state.totalPrice += action.payload.price;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
