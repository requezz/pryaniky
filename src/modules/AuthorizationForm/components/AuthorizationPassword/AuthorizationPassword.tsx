import { memo } from "react";
// @ts-ignore
import cls from "./AuthorizationPassword.module.scss";
import { classNames } from "../../../../app/helpers/classNames";
import { TextField } from "../../../../UI/TextField/TextField";
import { IFormikProps } from "../../helpers/useValidateForm";
import { FormikProps } from "formik";

interface IAuthorizationPasswordProps {
  className?: string;
  formik: FormikProps<IFormikProps>;
  error: string;
}

export const AuthorizationPassword = memo(
  (props: IAuthorizationPasswordProps) => {
    const { className, formik, error } = props;

    return (
      <div>
        <TextField
          name="password"
          children="Password*"
          type="password"
          className={classNames(cls.AuthorizationPassword, {}, [className])}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password && (
          <div className={cls.errorPassword}>{formik.errors.password}</div>
        )}
        <div className={cls.errorPassword}>{error}</div>
      </div>
    );
  }
);
