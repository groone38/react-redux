import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/data";

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

export const fetchFilters = createAsyncThunk(
  "product/filters",
  async (thunkAPI) => {
    const data: InitialStateProps[] = await fetch(
      "https://fakestoreapi.com/products/categories",
      {
        method: "GET",
      }
    ).then((res) => res.json());
    return data;
  }
);

export const fetchProductFilter = createAsyncThunk(
  "product/filterProduct",
  async (type: string, thunkAPI) => {
    const data = await fetch(
      `https://fakestoreapi.com/products/category/${type}`
    ).then((res) => res.json());
    return data;
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "product/SingleProduct",
  async (id: string | undefined, thunkAPI) => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`).then(
      (res) => res.json()
    );
    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // filterProducts(state, action) {
    //   try {
    //     state.filters = storeData.filter(
    //       (item) => item.type === action.payload
    //     );
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // singleProduct(state, action: PayloadAction<string>) {
    //   try {
    //     state.singleProduct = storeData.filter(
    //       (item) => item.id === action.payload
    //     );
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
  extraReducers(builder) {
    builder.addCase(fetchProduct.pending, (state) => {
      console.log("loading");
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchFilters.fulfilled, (state, action) => {
      state.filters = action.payload as [];
    });
    builder.addCase(fetchProductFilter.fulfilled, (state, action) => {
      state.filtresProducts = action.payload;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.singleProduct = action.payload;
    });
  },
});

// export const { filterProducts, singleProduct } = productsSlice.actions;
export default productsSlice.reducer;
