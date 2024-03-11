import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userData } from "../../types/user";
import { RootState } from "../../app/store";
import { CapacitorCookies } from "@capacitor/core";

interface AuthState {
  accessToken: string | null;
}

const initialState: AuthState = {
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ accessToken: string }>) => {
      const accessToken = action.payload.accessToken;
      console.log(accessToken);

      document.cookie = "accessToken=" + accessToken;
      // CapacitorCookies.setCookie({
      //   url: "http://localhost:8100",
      //   key: "accessToken",
      //   value: accessToken,
      // });

      state.accessToken = accessToken;
    },
    logOut: (state) => {
      state.accessToken = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
