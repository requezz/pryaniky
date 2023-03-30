import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../app/types/global";
import { ITypesDataRecordTable } from "../types/typesDataTable";

export const fetchDataByTable = createAsyncThunk<
  ITypesDataRecordTable[],
  string | null,
  ThunkConfig<string>
>("table/fetchDataByTable", async (token, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get(
      `/ru/data/v3/testmethods/docs/userdocs/get`,
      {
        headers: {
          "x-auth": token,
        },
      }
    );

    return response.data.data;
  } catch (e) {
    return rejectWithValue("Не удалось получить данные");
  }
});
