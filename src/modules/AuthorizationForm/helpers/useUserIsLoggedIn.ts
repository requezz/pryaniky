import { useLocation, useNavigate, useNavigationType } from "react-router-dom";
import { useEffect, useState } from "react";
import { TUserIsLoggedIn } from "./types/userIsLoggedIn";
import { useLocalStorage } from "../../../app/helpers/useLocalStorage";
import { getRouteAuthorization, getRouteTable } from "../../../app/const/router";

export const useUserIsLoggedIn = (): TUserIsLoggedIn => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const { stateWithLocal, localUserIsLoggedIn } = useLocalStorage();

  const location = useLocation();

  const navigate = useNavigate();
  const navigateType = useNavigationType();

  useEffect(() => {
    localUserIsLoggedIn("userDetails");
  }, [localUserIsLoggedIn]);

  useEffect(() => {
    if (stateWithLocal) {
      setIsLoggedIn(true);
      navigate(getRouteTable());
    } else {
      setIsLoggedIn(false);
      navigate(getRouteAuthorization());
    }
  }, [navigate, stateWithLocal]);

  useEffect(() => {
    if (navigateType === "POP") {
      if (!isLoggedIn) {
        navigate(getRouteAuthorization());
      }
    }
  }, [isLoggedIn, navigate, navigateType, location]);

  useEffect(() => {
    if (location.pathname === getRouteAuthorization()) {
      setIsLoggedIn(false);
    }
  }, [location.pathname]);

  return {
    isLoggedIn,
  };
};
