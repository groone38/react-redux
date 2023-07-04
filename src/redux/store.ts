import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./slices/sliderSlice";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
