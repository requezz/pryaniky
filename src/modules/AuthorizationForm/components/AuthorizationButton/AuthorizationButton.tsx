import { memo } from "react";
import { classNames } from "../../../../app/helpers/classNames";
import { Button } from "../../../../UI/Button/Button";
// @ts-ignore
import cls from "./AuthorizationButton.module.scss";

interface IAuthorizationButtonProps {
  className?: string;
  formValidate?: boolean | undefined;
}

export const AuthorizationButton = memo((props: IAuthorizationButtonProps) => {
  const { className, formValidate } = props;

  return (
    <Button
      type="submit"
      children="Войти"
      className={classNames(cls.AuthorizationButton, {}, [className])}
      disabled={formValidate}
    />
  );
});
