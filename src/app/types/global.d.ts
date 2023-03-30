import { Mods } from "../helpers/classNames";
import { ThunkExtraArg } from "../store/store";

declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

export type IUserLogged = {
  stateWithLocal: string | null | void;
  localUserIsLoggedIn: (key: string) => void;
  setUserLogged: (key: string, value: TLocal) => void;
  removeUser: (key: string) => void;
};

export type ILocal = {
  token: Mods;
  isAdmin: boolean;
};

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
