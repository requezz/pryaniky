import { memo } from "react";
import { ITypesDataRecordTable } from "../../store/types/typesDataTable";
import { TableItem } from "./TableItem/TableItem";

interface ITableListProps {
  className?: string;
  dataTable: ITypesDataRecordTable[];
}

export const TableList = memo((props: ITableListProps) => {
  const { dataTable } = props;

  return (
    <>
      {dataTable.map((data: ITypesDataRecordTable) => {
        return <TableItem key={data.id} data={data} />;
      })}
    </>
  );
});
