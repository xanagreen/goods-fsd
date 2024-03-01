import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "pages/ProductPage/api";

const API_LINK = "https://dummyjson.com";

export type ProductsResponse = {
  products: Product[];
  skip: number;
  total: number;
  limit: number;
};

export const selectionProductsApi = createApi({
  reducerPath: "selectionProductsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_LINK,
  }),

  tagTypes: ["SelectionProducts"],

  endpoints: (build) => ({
    getSelectionProducts: build.query<Product[], string>({
      query: (category) => `products/category/${category}`,
      transformResponse: (response: ProductsResponse) =>
        [...response.products].sort((a, b) => b.rating - a.rating).slice(0, 3),
      providesTags: ["SelectionProducts"],
    }),
  }),
});

export const { useGetSelectionProductsQuery } = selectionProductsApi;
