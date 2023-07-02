import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/data";

export interface InitialStateProps {
  id: string;
  img: string;
  name: string;
  text: string;
  type: string;
  size?: string[];
  color: string[];
  gender: string;
  price: number;
}

interface InitialState {
  filters: InitialStateProps[];
  singleProduct: InitialStateProps[];
}

const initialState: InitialState = {
  filters: [],
  singleProduct: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts(state, action) {
      try {
        state.filters = storeData.filter(
          (item) => item.type === action.payload
        );
      } catch (error) {
        console.log(error);
      }
    },
    singleProduct(state, action: PayloadAction<string>) {
      try {
        state.singleProduct = storeData.filter(
          (item) => item.id === action.payload
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const { filterProducts, singleProduct } = productsSlice.actions;
export default productsSlice.reducer;
