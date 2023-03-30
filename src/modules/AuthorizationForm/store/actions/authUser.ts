import { ILoginRequest } from "../types/typesEndpoints";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../app/types/global";

export const authUser = createAsyncThunk<
  [],
  ILoginRequest,
  ThunkConfig<string>
>("authorization/authUser", async (data: ILoginRequest, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.post(
      "/ru/data/v3/testmethods/docs/login",
      {
        username: data.username,
        password: data.password,
      },
    );

    return response.data.data.token;
  } catch (e) {
    return rejectWithValue("error");
  }
});

export const logout = () => {
  return localStorage.removeItem("userDetails");
};
