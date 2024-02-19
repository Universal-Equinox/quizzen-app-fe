import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logOut, setCredentials } from "../../feature/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5174/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    console.log(token);

    if (token) headers.set("authorization", `Bearer ${token}`);

    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    console.log("sending refresh token");
    // send refresh token to get new access token
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
    console.log(refreshResult);

    // set credentials with new token here

    // if (refreshResult?.data) {
    //   const user = (api.getState() as RootState).auth.user;
    //   // store the new token
    //   api.dispatch(setCredentials({ user: user, data: { token: refreshResult.data?.token} }));
    //   // retry the original query with new access token
    //   result = await baseQuery(args, api, extraOptions);
    // } else {
    //   api.dispatch(logOut());
    // }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});