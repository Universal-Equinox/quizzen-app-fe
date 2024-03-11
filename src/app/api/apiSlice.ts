import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logOut, setCredentials } from "../../feature/auth/authSlice";
import { CapacitorCookies } from "@capacitor/core";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5174/api",
  credentials: "include",
  prepareHeaders: async (headers, { getState }) => {
    // const token = (getState() as RootState).auth.accessToken;
    await CapacitorCookies.getCookies().then((cookies) => {
      if (cookies.accessToken) {
        console.log(cookies);
        headers.set("authorization", `Bearer ${cookies.accessToken}`);
      }
    });

    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    console.log("sending refresh token");
    // send refresh token to get new access token
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
    console.log(refreshResult);

    // set credentials with new token here

    if (refreshResult.data) {
      const token = (api.getState() as RootState).auth.accessToken;
      // store the new token

      // api.dispatch(setCredentials({accessToken:...refreshResult.data}));

      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
