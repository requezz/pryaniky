import authReducer from "../../modules/AuthorizationForm/store/slices/authUserSlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AxiosInstance } from "axios";
import { $api } from "../api/api";
import dataTableReducer from "../../modules/Table/store/slices/dataTableSlice";

export interface ThunkExtraArg {
  api: AxiosInstance;
}

const extraArg: ThunkExtraArg = {
  api: $api,
};

const setupStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      table: dataTableReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
