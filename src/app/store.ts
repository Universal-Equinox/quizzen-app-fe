import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice";
import postReducer from "../feature/post/postSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
