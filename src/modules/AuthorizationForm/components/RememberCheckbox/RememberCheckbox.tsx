import { memo } from "react";
// @ts-ignore
import cls from "./RememberCheckbox.module.scss";
import { Checkbox } from "../../../../UI/Checkbox/Checkbox";
import { classNames } from "../../../../app/helpers/classNames";

interface IRememberCheckboxProps {
  className?: string;
}

export const RememberCheckbox = memo((props: IRememberCheckboxProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.RememberCheckbox, {}, [className])}>
        <Checkbox />
      <span className={cls.rememberMe}>
        Запомнить меня
      </span>
    </div>
  );
});
