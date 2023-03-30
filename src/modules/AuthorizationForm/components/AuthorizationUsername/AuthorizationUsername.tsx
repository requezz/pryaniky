import { memo } from "react";
// @ts-ignore
import cls from "./AuthorizationUsername.module.scss";
import { classNames } from "../../../../app/helpers/classNames";
import { TextField } from "../../../../UI/TextField/TextField";
import { IFormikProps } from "../../helpers/useValidateForm";
import { FormikProps } from "formik";

interface IAuthorizationUsernameProps {
  className?: string;
  formik: FormikProps<IFormikProps>;
}

export const AuthorizationUsername = memo(
  (props: IAuthorizationUsernameProps) => {
    const { className, formik } = props;

    return (
      <div>
        <TextField
          children="Username*"
          type="text"
          name="username"
          className={classNames(cls.AuthorizationUsername, {}, [className])}
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.username && formik.touched.username && (
          <div className={cls.errorUsername}>{formik.errors.username}</div>
        )}
      </div>
    );
  }
);
