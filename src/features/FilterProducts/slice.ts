import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_LINK = "https://dummyjson.com";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_LINK,
  }),

  tagTypes: ["Categories"],

  endpoints: (build) => ({
    getProductsCategories: build.query<string[], void>({
      query: () => "products/categories",
      providesTags: ["Categories"],
    }),
  }),
});

export type CategoriesState = {
  categoryOption: string | null;
};

const initialState: CategoriesState = {
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
});

export const { setCategoryOption } = categoriesSlice.actions;
export const { useGetProductsCategoriesQuery } = categoriesApi;

export default categoriesSlice.reducer;
