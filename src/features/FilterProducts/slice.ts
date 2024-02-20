import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

const API_LINK = "https://dummyjson.com";

export const fetchProductsCategories = createAsyncThunk("/products/categories", async () => {
  return await fetch(`${API_LINK}/products/categories`).then((res) => res.json());
});

export type CategoriesState = {
  categories: string[];
  categoryOption: string | null;
};

const initialState: CategoriesState = {
  categories: [],
  categoryOption: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoryOption: (state, action: PayloadAction<string | null>) => {
      state.categoryOption = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsCategories.fulfilled, (state, action) => {
      state.categories = [...action.payload];
    });
  },
});

export const { setCategoryOption } = categoriesSlice.actions;

export default categoriesSlice.reducer;
