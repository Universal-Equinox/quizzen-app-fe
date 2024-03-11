import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice";
import postReducer from "../feature/post/postSlice";
import { apiSlice } from "./api/apiSlice";
import { authApiSlice } from "../feature/auth/authApiSlice";
import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    auth: authReducer,
    post: postReducer,
  },

  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware().concat(authApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

setupListeners(store.dispatch);
