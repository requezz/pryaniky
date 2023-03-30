import { memo } from "react";
// @ts-ignore
import cls from "./EditDataRecordTable.module.scss";
import { classNames } from "../../../../app/helpers/classNames";
import { Modal } from "../../../../UI/Modal/Modal";
import { TextField } from "../../../../UI/TextField/TextField";
import { Button } from "../../../../UI/Button/Button";
import * as React from "react";
import { useValidateForm } from "../../../AuthorizationForm/helpers/useValidateForm";
import { useAppDispatch } from "../../../../app/store/store";
import { editRecordInTable } from "../../store/actions/editRecordInTable";
import { ITypesDataRecordTable } from "../../store/types/typesDataTable";

interface IEditDataRecordTableProps {
  className?: string;
  btnText: string | React.ReactNode;
  data: ITypesDataRecordTable;
}

export const EditDataRecordTable = memo((props: IEditDataRecordTableProps) => {
  const { className, btnText, data } = props;

  const { formik } = useValidateForm();

  const dispatch = useAppDispatch();

  const handleEditDataTable = () => {
    dispatch(editRecordInTable({ formik, data }));
    formik.values.companySignatureName = "";
    formik.values.documentName = "";
    formik.values.documentStatus = "";
    formik.values.documentType = "";
    formik.values.employeeNumber = "";
    formik.values.employeeSignatureName = "";
  };

  return (
    <div className={classNames(cls.EditDataRecordTable, {}, [className])}>
      <Modal btnText={btnText}>
        <TextField
          className={cls.inputEditModal}
          type="text"
          name="companySignatureName"
          children="Company Signature Name"
          value={formik.values.companySignatureName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          className={cls.inputEditModal}
          type="text"
          value={formik.values.documentName}
          name="documentName"
          children="Document Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          className={cls.inputEditModal}
          type="text"
          value={formik.values.documentStatus}
          name="documentStatus"
          children="Document Status"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          className={cls.inputEditModal}
          type="text"
          value={formik.values.documentType}
          name="documentType"
          children="Document Type"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          className={cls.inputEditModal}
          type="number"
          value={formik.values.employeeNumber}
          name="employeeNumber"
          children="Employee Number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          className={cls.inputEditModal}
          type="text"
          value={formik.values.employeeSignatureName}
          name="employeeSignatureName"
          children="Employee Signature Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Button
          className={cls.btnEditModal}
          type="submit"
          onClick={handleEditDataTable}
          disabled={true}
        >
          Изменить
        </Button>
      </Modal>
    </div>
  );
});
