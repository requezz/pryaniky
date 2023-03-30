import { memo } from "react";
// @ts-ignore
import cls from "./TableHeader.module.scss";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHeadMUI from "@mui/material/TableHead";
import { tableHeaderData } from "../../const/tableHeaderData";
import { AddRecordToTable } from "../AddDataRecordTable/AddRecordToTable";

interface ITableHeaderProps {
  className?: string;
}

export const TableHeader = memo((props: ITableHeaderProps) => {
  return (
    <TableHeadMUI>
      <TableRow className={cls.TableRow}>
        {tableHeaderData.map((data, index) => {
          return (
            <TableCell key={index} className={cls.TableCell} align="center">
              {data.tableHeaderTitle}
            </TableCell>
          );
        })}
        <TableCell className={cls.TableCell}>
          <AddRecordToTable btnText="Добавить Запись" />
        </TableCell>
      </TableRow>
    </TableHeadMUI>
  );
});
