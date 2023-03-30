import { memo } from "react";
// @ts-ignore
import cls from "./AddRecordToTable.module.scss";
import { TextField } from "../../../../UI/TextField/TextField";
import { Modal } from "../../../../UI/Modal/Modal";
import { useValidateForm } from "../../../AuthorizationForm/helpers/useValidateForm";
import { useAppDispatch } from "../../../../app/store/store";
import { addRecordForTable } from "../../store/actions/addRecordForTable";
import { Button } from "../../../../UI/Button/Button";

interface IAddRecordToTableProps {
  className?: string;
  btnText: string;
}

export const AddRecordToTable = memo((props: IAddRecordToTableProps) => {
  const { btnText } = props;

  const { formik } = useValidateForm();

  const dispatch = useAppDispatch();

  const handleSubmitDataTable = () => {
    dispatch(addRecordForTable(formik.values));
    formik.values.companySignatureName = "";
    formik.values.documentName = "";
    formik.values.documentStatus = "";
    formik.values.documentType = "";
    formik.values.employeeNumber = "";
    formik.values.employeeSignatureName = "";
  };

  return (
    <Modal btnText={btnText} btnModalClass={cls.addModal}>
      <TextField
        className={cls.inputAddModal}
        type="text"
        name="companySignatureName"
        children="Company Signature Name"
        value={formik.values.companySignatureName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextField
        className={cls.inputAddModal}
        type="text"
        value={formik.values.documentName}
        name="documentName"
        children="Document Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextField
        className={cls.inputAddModal}
        type="text"
        value={formik.values.documentStatus}
        name="documentStatus"
        children="Document Status"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextField
        className={cls.inputAddModal}
        type="text"
        value={formik.values.documentType}
        name="documentType"
        children="Document Type"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextField
        className={cls.inputAddModal}
        type="number"
        value={formik.values.employeeNumber}
        name="employeeNumber"
        children="Employee Number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextField
        className={cls.inputAddModal}
        type="text"
        value={formik.values.employeeSignatureName}
        name="employeeSignatureName"
        children="Employee Signature Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Button
        className={cls.btnAddModal}
        type="submit"
        onClick={handleSubmitDataTable}
        disabled={true}
      >
        Добавить
      </Button>
    </Modal>
  );
});
