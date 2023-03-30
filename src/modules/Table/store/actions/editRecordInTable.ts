import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../app/types/global";
import {ITypesDataRecordTable, TEditAsyncSchema} from "../types/typesDataTable";

export const editRecordInTable = createAsyncThunk<
  ITypesDataRecordTable,
  TEditAsyncSchema,
  ThunkConfig<string>
>("table/changeRecordInTable", async (args, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  const { formik, data } = args;
  const token = localStorage.getItem("userDetails");

  try {
    const response = await extra.api.post(
      `/ru/data/v3/testmethods/docs/userdocs/set/${data.id}`,
      {
        companySigDate: new Date().toISOString(),
        companySignatureName: formik.values.companySignatureName,
        documentName: formik.values.documentName,
        documentStatus: formik.values.documentStatus,
        documentType: formik.values.documentType,
        employeeNumber: formik.values.employeeNumber,
        employeeSigDate: new Date().toISOString(),
        employeeSignatureName: formik.values.employeeSignatureName,
      },
      {
        headers: {
          "x-auth": token,
        },
      }
    );

    return response.data.data;
  } catch (e) {
    return rejectWithValue("Не удалось изменить данные");
  }
});
