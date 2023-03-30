import { memo } from "react";
import { Table } from "../../modules/Table";

interface ITablePageProps {
  className?: string;
}

export const TablePage = memo((props: ITablePageProps) => {
  return (
    <div>
      <Table />
    </div>
  );
});
