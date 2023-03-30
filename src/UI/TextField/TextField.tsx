import React from "react";
import { classNames } from "../../app/helpers/classNames";
import TextFieldMUI from "@mui/material/TextField";
// @ts-ignore
import cls from "./TextField.module.scss";

interface ITextFieldProps {
  className?: string;
  children: React.ReactNode;
  type: string;
  value: string;
  onChange?: (e: React.ChangeEvent) => void;
  onBlur?: (e: React.FocusEvent) => void;
  name: string;
}

export const TextField = (props: ITextFieldProps) => {
  const { className, children, type, value, onChange, onBlur, name } = props;

  return (
    <TextFieldMUI
      id="outlined-basic"
      label={children}
      variant="outlined"
      type={type}
      className={classNames(cls.Input, {}, [className])}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      name={name}
    />
  );
};
