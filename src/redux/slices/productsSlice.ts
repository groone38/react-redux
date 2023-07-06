import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface InitialStateProps {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

interface InitialState {
  products: InitialStateProps[];
  filters: string[];
  filtresProducts: InitialStateProps[];
  singleProduct: InitialStateProps;
  loading: boolean;
}

const initialState: InitialState = {
  products: [],
  filters: [],
  filtresProducts: [],
  singleProduct: {
    id: 0,
    category: "",
    image: "",
    title: "",
    rating: {
      count: 0,
      rate: 0,
    },
    price: 0,
    description: "",
  },
  loading: false,
};

export const fetchProduct = createAsyncThunk(
  "product/fetch",
  async (thunkAPI) => {
    try {
      const data = await fetch("https://fakestoreapi.com/products", {
        method: "GET",
      }).then((res) => res.json());
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const fetchFilters = createAsyncThunk(
  "product/filters",
  async (thunkAPI) => {
    try {
      const data: InitialStateProps[] = await fetch(
        "https://fakestoreapi.com/products/categories",
        {
          method: "GET",
        }
      ).then((res) => res.json());
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const fetchProductFilter = createAsyncThunk(
  "product/filterProduct",
  async (type: string, thunkAPI) => {
    try {
      const data = await fetch(
        `https://fakestoreapi.com/products/category/${type}`
      ).then((res) => res.json());
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "product/SingleProduct",
  async (id: string | undefined, thunkAPI) => {
    try {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`).then(
        (res) => res.json()
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchFilters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFilters.fulfilled, (state, action) => {
      state.loading = false;
      state.filters = action.payload as [];
    });
    builder.addCase(fetchProductFilter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductFilter.fulfilled, (state, action) => {
      state.loading = false;
      state.filtresProducts = action.payload;
    });
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.singleProduct = action.payload;
    });
  },
});

export default productsSlice.reducer;
