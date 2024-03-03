import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice";
import postReducer from "../feature/post/postSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
