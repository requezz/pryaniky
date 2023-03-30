import { memo, useEffect } from "react";
import { useValidateForm } from "../../helpers/useValidateForm";
import { useAuthorization } from "../../helpers/useAuthorization";
import { classNames } from "../../../../app/helpers/classNames";
// @ts-ignore
import cls from "./AuthorizationForm.module.scss";

import { useAppDispatch } from "../../../../app/store/store";
import { authUser } from "../../store/actions/authUser";
import { AuthorizationUsername } from "../AuthorizationUsername/AuthorizationUsername";
import { AuthorizationPassword } from "../AuthorizationPassword/AuthorizationPassword";
import { RememberCheckbox } from "../RememberCheckbox/RememberCheckbox";
import { AuthorizationButton } from "../AuthorizationButton/AuthorizationButton";

interface IAuthorizationFormProps {
  className?: string;
}

export const AuthorizationForm = memo((props: IAuthorizationFormProps) => {
  const { className } = props;

  const { formik, formValidate } = useValidateForm();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authUser(formik.values));
  }, [dispatch, formik.values]);

  const { error } = useAuthorization({ formik });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={classNames(cls.AuthorizationForm, {}, [className])}>
        <div className={cls.authorization}>Авторизация</div>
        <AuthorizationUsername formik={formik} />
        <AuthorizationPassword formik={formik} error={error} />
        <RememberCheckbox />
        <AuthorizationButton formValidate={formValidate} />
      </div>
    </form>
  );
});
