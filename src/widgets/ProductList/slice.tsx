import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "app/store/store";

const API_LINK = "https://dummyjson.com";

export const fetchAllProducts = createAsyncThunk("/products/list", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const skip = state.products.fetchBy === 'all' ? state.products.skip : 0;

  return await fetch(`${API_LINK}/products?limit=9&skip=${skip}`).then((res) => res.json());
});

export const fetchProductsByCategory = createAsyncThunk("/products/filtered", async (category: string) => {
  return await fetch(`${API_LINK}/products/category/${category}`).then((res) => res.json());
});

export const fetchProductsBySearch = createAsyncThunk("/products/search", async (search: string, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const skip = state.products.fetchBy === 'search' ? state.products.skip : 0;

  return await fetch(`${API_LINK}/products/search?q=${search}&skip=${skip}&limit=9`).then((res) => res.json());
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = state.fetchBy === 'all' ? [...state.products, ...action.payload.products] : [...action.payload.products];
      state.total = action.payload.total;
      state.skip = state.fetchBy === 'all' ? state.skip + 9 : 9;
      state.fetchBy = 'all'
    });
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.products = [...action.payload.products];
      state.total = action.payload.total;
      state.skip = 0;
    });
    builder.addCase(fetchProductsBySearch.fulfilled, (state, action) => {
      state.products = state.fetchBy === 'search' ? [...state.products, ...action.payload.products] : [...action.payload.products];
      state.total = action.payload.total;
      state.skip = state.fetchBy === 'search' ? state.skip + 9 : 9;
      state.fetchBy = 'search'
    });
  },
});

export default productsSlice.reducer;