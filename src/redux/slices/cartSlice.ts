import { createSlice } from "@reduxjs/toolkit";

export interface Cart {
  id: number;
  price: number;
  name: string;
  img: string;
  amount: number;
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
      try {
        const exist = state.cart.find(
          (item: Cart) => item.id === action.payload.id
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += action.payload.price;
        } else {
          state.cart.push(action.payload);
        }
        state.totalAmount++;
        state.totalPrice += action.payload.price;
        localStorage.setItem("product", JSON.stringify(state.cart));
        localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      } catch (error) {
        console.log(error);
      }
    },
    removeCart(state, action) {
      try {
        const product = state.cart.find(
          (item) => item.id === action.payload.id
        );
        if (product!.amount > 1) {
          state.cart = state.cart.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                amount: item.amount - 1,
                totalPrice: Math.round(item.totalPrice - item.price),
              };
            }
            return item;
          });
        } else {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
        }
        state.totalAmount--;
        state.totalPrice -= action.payload.price;
        localStorage.setItem("product", JSON.stringify(state.cart));
        localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      } catch (error) {
        console.log(error);
      }
    },
    setLocalStorage(state) {
      state.cart = JSON.parse(localStorage.getItem("product") as string);
      state.totalAmount = JSON.parse(
        localStorage.getItem("totalAmount") as string
      );
      state.totalPrice = JSON.parse(
        localStorage.getItem("totalPrice") as string
      );
    },
  },
});

export const { addToCart, removeCart, setLocalStorage } = cartSlice.actions;
export default cartSlice.reducer;
