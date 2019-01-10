import {
  ActionTypes,
  ISetLoggedInAction,
  ILogoutAction,
  ILoginAction
} from "./types";
import { IRootState, RootActions } from "../index";
import { ThunkDispatch } from "redux-thunk";

export const setLoggedIn = (payload: boolean): ISetLoggedInAction => {
  return {
    type: ActionTypes.SET_LOGGED_IN,
    payload
  };
};

export const loginAction = (): ILoginAction => {
  return {
    type: ActionTypes.LOGIN
  };
};

export const login = () => {
  return async (dispatch: ThunkDispatch<IRootState, null, RootActions>) => {
    dispatch(loginAction());
    dispatch(setLoggedIn(true));
  };
};

export const logoutAction = (): ILogoutAction => {
  return {
    type: ActionTypes.LOGOUT
  };
};

export const logout = () => {
  return async (dispatch: ThunkDispatch<IRootState, null, RootActions>) => {
    dispatch(logoutAction());
    dispatch(setLoggedIn(false));
  };
};
