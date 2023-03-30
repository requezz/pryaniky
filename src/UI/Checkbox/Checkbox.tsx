import { memo } from "react";
// @ts-ignore
import cls from "./Checkbox.module.scss";
import { classNames } from "../../app/helpers/classNames";
import CheckboxMUI from '@mui/material/Checkbox';

interface ICheckboxProps {
  className?: string;
}

export const Checkbox = memo((props: ICheckboxProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Checkbox, {}, [className])}>
        <CheckboxMUI  />
    </div>
  );
});
