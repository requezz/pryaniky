import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../app/types/global";
import { IFormikProps } from "../../../AuthorizationForm/helpers/useValidateForm";
import { ITypesDataRecordTable } from "../types/typesDataTable";

export const addRecordForTable = createAsyncThunk<
  ITypesDataRecordTable,
  IFormikProps,
  ThunkConfig<string>
>("table/addRecordForTable", async (data, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  const token = localStorage.getItem("userDetails");

  try {
    const response = await extra.api.post(
      `/ru/data/v3/testmethods/docs/userdocs/create`,
      {
        companySigDate: new Date().toISOString(),
        companySignatureName: data.companySignatureName,
        documentName: data.documentName,
        documentStatus: data.documentStatus,
        documentType: data.documentType,
        employeeNumber: data.employeeNumber,
        employeeSigDate: new Date().toISOString(),
        employeeSignatureName: data.employeeSignatureName,
      },
      {
        headers: {
          "x-auth": token,
        },
      }
    );

    return response.data.data;
  } catch (e) {
    return rejectWithValue("Не удалось добавить данные");
  }
});
