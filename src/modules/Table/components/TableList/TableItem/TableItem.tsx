import { memo } from "react";
// @ts-ignore
import cls from "./TableItem.module.scss";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { ITypesDataRecordTable } from "../../../store/types/typesDataTable";
import { deleteRecordFromTable } from "../../../store/actions/deleteRecordFromTable";
import { Button } from "../../../../../UI/Button/Button";
import { useAppDispatch } from "../../../../../app/store/store";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditDataRecordTable } from "../../EditDataRecordTable/EditDataRecordTable";
import EditIcon from "@mui/icons-material/Edit";

interface ITableItemProps {
  className?: string;
  data: ITypesDataRecordTable;
}

export const TableItem = memo((props: ITableItemProps) => {
  const { data } = props;

  const dispatch = useAppDispatch();

  const handleClickDeleteRecord = () => {
    dispatch(deleteRecordFromTable(data.id));
  };

  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell align="center">{data.companySigDate}</TableCell>
          <TableCell align="center">{data.companySignatureName}</TableCell>
          <TableCell align="center">{data.documentName}</TableCell>
          <TableCell align="center">{data.documentStatus}</TableCell>
          <TableCell align="center">{data.documentType}</TableCell>
          <TableCell align="center">{data.employeeNumber}</TableCell>
          <TableCell align="center">{data.employeeSigDate}</TableCell>
          <TableCell align="center">
            <div className={cls.common}>{data.employeeSignatureName}</div>
          </TableCell>
          <Button
            disabled={true}
            type="reset"
            onClick={handleClickDeleteRecord}
            className={cls.btnDelete}
          >
            <DeleteIcon className={cls.deleteIcon} />
          </Button>
          <Button type="submit" disabled={true} className={cls.btnEdit}>
            <EditDataRecordTable
              data={data}
              btnText={<EditIcon className={cls.editIcon} />}
            />
          </Button>
        </TableRow>
      </TableBody>
    </>
  );
});
