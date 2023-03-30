import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../app/types/global";
import { dataTableActions } from "../slices/dataTableSlice";

export const deleteRecordFromTable = createAsyncThunk<
  string,
  string,
  ThunkConfig<string>
>("table/deleteRecordFromTable", async (id, thunkApi) => {
  const { extra, rejectWithValue, dispatch } = thunkApi;
  const token = localStorage.getItem("userDetails");

  try {
    const response = await extra.api.post(
      `/ru/data/v3/testmethods/docs/userdocs/delete/${id}`,
      {},
      {
        headers: {
          "x-auth": token,
        },
      }
    );

    dispatch(dataTableActions.deleteRecord(id));

    return response.data.data;
  } catch (e) {
    return rejectWithValue("Не удалось удалить данные");
  }
});
