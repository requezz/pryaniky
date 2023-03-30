import { IFormikProps } from "./useValidateForm";
import { IHandleSubmitProps } from "./types/handleSubmit";
import { useAppDispatch, useAppSelector } from "../../../app/store/store";
import { authUser } from "../store/actions/authUser";
import { FormikProps } from "formik";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../../app/helpers/useLocalStorage";
import { usersData } from "../const/usersData";
import { useState } from "react";
import { getRouteTable } from "../../../app/const/router";

export interface IUserIdentificationProps {
  formik: FormikProps<IFormikProps>;
}

export const useAuthorization = ({
  formik,
}: IUserIdentificationProps): IHandleSubmitProps => {
  const dispatch = useAppDispatch();

  const [error, setError] = useState<string>("");

  const { accessToken } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  const { setUserLogged } = useLocalStorage();

  const users = usersData.find(
    (user) => user.password === formik.values.password
  );

  const handleSubmit = () => {
    if (users) {
      dispatch(
        authUser({
          username: formik.values.username,
          password: formik.values.password,
        })
      );
      setUserLogged("userDetails", accessToken);
      navigate(getRouteTable());
    } else {
      setError("Неправильный логин или пароль");
    }
  };

  return {
    handleSubmit,
    error,
  };
};
