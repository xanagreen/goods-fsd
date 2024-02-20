import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "app/store/store";

const API_LINK = "https://dummyjson.com";

export const fetchAllProducts = createAsyncThunk("/products/list", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const skip = state.products.fetchBy === 'search' && !state.search.search ? 0 : state.products.skip;
  const url = !state.search.search
    ? `${API_LINK}/products?limit=9&skip=${skip}` 
    : `${API_LINK}/products/search?q=${state.search.search}&skip=${skip}&limit=9`

  return await fetch(url).then((res) => res.json());
});

export const fetchProductsByCategory = createAsyncThunk("/products/filtered", async (category: string) => {
  return await fetch(`${API_LINK}/products/category/${category}`).then((res) => res.json());
});

export const fetchProductsBySearch = createAsyncThunk("/products/search", async (search: string) => {
  return await fetch(`${API_LINK}/products/search?q=${search}&skip=0&limit=9`).then((res) => res.json());
});

export type Product = {
  "id": number,
  "title": string,
  "description": string,
  "price": number,
  "discountPercentage": number,
  "rating":number,
  "stock": number,
  "brand": string,
  "category": string,
  "thumbnail": string,
  "images": string[]
}

export type ProductsState = {
  products: Product[],
  skip: number,
  total: number,
  fetchBy: 'search' | 'all',
};

const initialState: ProductsState = {
  products: [],
  skip: 0,
  total: 0,
  fetchBy: 'all',
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetProducts: (state) => {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload.skip > 0 ? [...state.products, ...action.payload.products] : [...action.payload.products];
      state.total = action.payload.total;
      state.skip = action.payload.skip + 9;
      state.fetchBy = 'all'
    });
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.products = [...action.payload.products];
      state.total = action.payload.total;
      state.skip = 0;
    });
    builder.addCase(fetchProductsBySearch.fulfilled, (state, action) => {
      state.products = [...action.payload.products];
      state.total = action.payload.total;
      state.skip = action.payload.skip + 9;
      state.fetchBy = 'search'
    });
  },
});

export const { resetProducts } = productsSlice.actions;

export default productsSlice.reducer;
