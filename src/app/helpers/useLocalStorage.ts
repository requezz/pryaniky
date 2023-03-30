import { IUserLogged } from "../types/global";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLocalStorage = (): IUserLogged => {
  const [stateWithLocal, setStateWithLocal] = useState<string | null | void>(
    null
  );

  const navigate = useNavigate();

  const localUserLogged = (key: string) => {
    return localStorage.getItem(key);
  };

  const localUserIsLoggedIn = (key: string) => {
    if (localUserLogged(key)) {
      setStateWithLocal(localStorage.getItem(key));
    }
  };

  const setUserLogged = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const removeUser = (key: string) => {
    if (localUserLogged(key)) {
      setStateWithLocal(localStorage.removeItem(key));
      navigate("/");
    }
  };

  return {
    stateWithLocal,
    localUserIsLoggedIn,
    setUserLogged,
    removeUser,
  };
};
