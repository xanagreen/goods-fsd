import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_LINK = "https://dummyjson.com";

export const fetchProduct = createAsyncThunk("/product", async (id: string) => {
  return await fetch(`${API_LINK}/products/${id}`).then((res) => res.json());
});

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductState = {
  product: Product | null;
};

const initialState: ProductState = {
  product: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export default productSlice.reducer;
