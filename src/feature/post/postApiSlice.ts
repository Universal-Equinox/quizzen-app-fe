import { apiSlice } from "../../app/api/apiSlice";
import { Post } from "../../types/post";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/question",
      keepUnusedDataFor: 10,
      
    }),
  }),
});

export const { useGetPostsQuery } = postApiSlice;
