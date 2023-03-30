import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authUser } from "../actions/authUser";
export interface IAuthState {
  accessToken: [];
  isLoading: boolean;
  error: string | undefined;
  username: string;
  password: string;
}

const initialState: IAuthState = {
  accessToken: [],
  isLoading: false,
  error: "",
  username: "",
  password: "",
};

export const authUserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authUser.fulfilled, (state, action: PayloadAction<[]>) => {
        state.accessToken = action.payload;
        state.isLoading = false;
      })
      .addCase(
        authUser.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.error = action.payload;
        }
      );
  },
});

export const { actions: authUserActions } = authUserSlice;

export default authUserSlice.reducer;
