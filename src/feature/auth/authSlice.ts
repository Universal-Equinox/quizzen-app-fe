import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userData } from "../../types/user";

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
    setCredentials: (
      state,
      action: PayloadAction<{ data: { accessToken: string } }>
    ) => {
      const { data } = action.payload;
      const { accessToken } = data;

      console.log(action.payload);

      state.accessToken = accessToken;
    },
    logOut: (state) => {
      state.accessToken = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const selectCurrentaccessToken = (state: { auth: AuthState }) =>
  state.auth.accessToken;

export default authSlice.reducer;
