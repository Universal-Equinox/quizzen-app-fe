import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string; user: any }, { credentials: any }>(
      {
        query: (credentials) => ({
          url: "/auth/login",
          method: "POST",
          body: { ...credentials },
        }),
      }
    ),
  }),
});

export const { useLoginMutation } = authApiSlice;
