import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useAuthorization } from "./useAuthorization";
import { useAppSelector } from "../../../app/store/store";

export interface IFormikProps {
  username: string;
  password: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSignatureName: string;
}

export function useValidateForm() {
  const [formValidate, setFormValidate] = useState<boolean>(false);

  const { username, password } = useAppSelector((state) => state.auth);
  const {
    companySignatureName,
    documentName,
    documentStatus,
    documentType,
    employeeNumber,
    employeeSignatureName,
  } = useAppSelector((state) => state.table);

  const formik = useFormik<IFormikProps>({
    initialValues: {
      username: username,
      password: password,
      companySignatureName: companySignatureName,
      documentName: documentName,
      documentStatus: documentStatus,
      documentType: documentType,
      employeeNumber: employeeNumber,
      employeeSignatureName: employeeSignatureName,
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Email не может быть пустым"),
      password: Yup.string().required("Пароль не может быть пустым"),
    }),
    onSubmit: () => {
      handleSubmit();
    },
  });
  const { handleSubmit } = useAuthorization({ formik });

  useEffect(() => {
    if (formik.errors.username || formik.errors.password) {
      setFormValidate(false);
    } else {
      setFormValidate(true);
    }
  }, [formik.errors.username, formik.errors.password]);

  return {
    formik,
    formValidate,
  };
}
