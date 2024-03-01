import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_LINK = "https://dummyjson.com";

type UpdateProductType = {
  body: ProductForm;
  id: number;
};

type ProductForm = {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
};

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_LINK,
  }),

  tagTypes: ["Product"],

  endpoints: (build) => ({
    getProduct: build.query<Product, number>({
      query: (id) => `products/${id}`,
      providesTags: ["Product"],
    }),

    updateProduct: build.mutation<Product, UpdateProductType>({
      query: ({ id, body }) => ({
        url: `products/${id}`,
        method: "PUT",
        body,
      }),
      async onQueryStarted({ id, body }, { dispatch, queryFulfilled }) {
        try {
          const { data: updatedProduct } = await queryFulfilled;
          dispatch(
            productApi.util.updateQueryData("getProduct", id, (draft) => {
              return Object.assign(draft, updatedProduct);
            })
          );
        } catch {}
      },
    }),
  }),
});

export type Product = {
  id: string;
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

export const { useGetProductQuery, useUpdateProductMutation } = productApi;
