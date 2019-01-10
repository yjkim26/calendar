import { IAuthState, ActionTypes } from "./types";
import { RootActions } from "../index";

export const initialState: IAuthState = {
  isLoggedIn: false
};

export default (
  state: IAuthState = initialState,
  action: RootActions
): IAuthState => {
  switch (action.type) {
    case ActionTypes.SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload
      };
    case ActionTypes.LOGIN:
      return {
        ...state
      };
    case ActionTypes.LOGOUT:
      return {
        ...state
      };

    default:
      return state;
  }
};
