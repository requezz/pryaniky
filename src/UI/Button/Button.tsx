import React from "react";
import { classNames } from "../../app/helpers/classNames";
import ButtonMUI from "@mui/material/Button";
import { Stack } from "@mui/material";
// @ts-ignore
import cls from './Button.module.scss'

interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean | undefined;
}

export const Button = (props: IButtonProps) => {
  const { className, children, onClick, type, disabled } = props;

  return (
    <Stack spacing={2} direction="row">
      <ButtonMUI
        type={type}
        variant="contained"
        className={classNames(cls.Button, {}, [className])}
        onClick={onClick}
        disabled={!disabled}
      >
        {children}
      </ButtonMUI>
    </Stack>
  );
};
