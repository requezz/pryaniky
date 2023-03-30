import * as React from "react";
import TableMUI from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/store/store";
import { fetchDataByTable } from "../../store/actions/fetchDataByTable";
import { TableHeader } from "../TableHeader/TableHeader";
import { TableList } from "../TableList/TableList";
// @ts-ignore
import cls from "./Table.module.scss";
import { LoaderUI } from "../../../../UI/Loader/LoaderUI";

export const Table = memo(() => {
  const { dataTable, isLoading } = useAppSelector((state) => state.table);

  const token = localStorage.getItem("userDetails");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDataByTable(token));
  }, [token, dispatch]);

  if (isLoading) {
    return <LoaderUI />;
  }

  return (
    <TableContainer component={Paper} className={cls.Table}>
      <TableMUI sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHeader />
        <TableList dataTable={dataTable} />
      </TableMUI>
    </TableContainer>
  );
});
