import { IFormikProps } from "../../../AuthorizationForm/helpers/useValidateForm";
import { FormikProps } from "formik";

export interface ITypesDataRecordTable {
  id: string;
  companySigDate: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate: string;
  employeeSignatureName: string;
}

export interface IStateSchemaTable {
  dataTable: ITypesDataRecordTable[];
  isLoading: boolean;
  error: string | undefined;
  id?: string | undefined;
  companySigDate?: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate?: string;
  employeeSignatureName: string;
}

export type TEditAsyncSchema = {
  formik: FormikProps<IFormikProps>;
  data: ITypesDataRecordTable;
};
