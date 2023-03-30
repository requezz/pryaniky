import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IStateSchemaTable,
  ITypesDataRecordTable,
} from "../types/typesDataTable";
import { fetchDataByTable } from "../actions/fetchDataByTable";
import { addRecordForTable } from "../actions/addRecordForTable";
import { editRecordInTable } from "../actions/editRecordInTable";

export const initialState: IStateSchemaTable = {
  dataTable: [],
  isLoading: false,
  error: "",
  companySignatureName: "",
  documentName: "",
  documentStatus: "",
  documentType: "",
  employeeNumber: "",
  employeeSignatureName: "",
};

export const dataTableSlice = createSlice({
  name: "dataTable",
  initialState,
  reducers: {
    deleteRecord: (state, action: PayloadAction<string>) => {
      state.dataTable = state.dataTable.filter(
        (data) => data.id !== action.payload
      );
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataByTable.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchDataByTable.fulfilled,
        (state, action: PayloadAction<ITypesDataRecordTable[]>) => {
          state.dataTable = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(
        fetchDataByTable.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.error = action.payload;
        }
      )
      .addCase(addRecordForTable.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        addRecordForTable.fulfilled,
        (state, action: PayloadAction<ITypesDataRecordTable>) => {
          state.isLoading = false;
          state.dataTable = [...state.dataTable, action.payload];
        }
      )
      .addCase(
        addRecordForTable.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.error = action.payload;
        }
      )
      .addCase(
        editRecordInTable.pending,
        (state, action: PayloadAction<string | undefined>) => {
          state.error = action.payload;
        }
      )
      .addCase(
        editRecordInTable.fulfilled,
        (state, action: PayloadAction<ITypesDataRecordTable>) => {
          state.dataTable = state.dataTable.map((data) => {
            if (data.id === action.payload.id) {
              return action.payload;
            }
            return data;
          });
        }
      )
      .addCase(
        editRecordInTable.rejected,
        (state, action: PayloadAction<any>) => {
          state.error = action.payload;
        }
      );
  },
});

export const { actions: dataTableActions } = dataTableSlice;

export default dataTableSlice.reducer;
