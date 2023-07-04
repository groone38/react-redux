import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  products: any;
}

const initialState: InitialState = {
  filters: [],
  singleProduct: [],
  products: [],
};

export const fetchProduct = createAsyncThunk(
  "product/fetch",
  async (thunkAPI) => {
    const data = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    }).then((res) => res.json());
    return data;
  }
);

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
  extraReducers(builder) {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { filterProducts, singleProduct } = productsSlice.actions;
export default productsSlice.reducer;
