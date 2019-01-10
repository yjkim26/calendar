export interface IAuthState {
  isLoggedIn: boolean;
}

export enum ActionTypes {
  SET_LOGGED_IN = "SET_LOGGED_IN",
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT"
}

export interface ISetLoggedInAction {
  readonly type: ActionTypes.SET_LOGGED_IN;
  readonly payload: boolean;
}

export interface ILoginAction {
  readonly type: ActionTypes.LOGIN;
}

export interface ILogoutAction {
  readonly type: ActionTypes.LOGOUT;
}

export type IAuthActions = ISetLoggedInAction | ILogoutAction | ILoginAction;
