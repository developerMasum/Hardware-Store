import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => {
        return {
          url: "/product/all",
          method: "GET",
        };
      },
      providesTags: [tagTypes.user],
    }),
    getSingleProduct: build.query({
      query: (id) => {
        return {
          url: `/product/${id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.user],
    }),
    createProduct: build.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useDeleteProductMutation,
} = productApi;
