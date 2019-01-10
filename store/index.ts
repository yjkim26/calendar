import { createStore, applyMiddleware, combineReducers, Reducer } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer, { AuthTypes } from "@/store/auth";

const middleware = [thunkMiddleware];

export interface IRootState {
  auth: AuthTypes.IAuthState;
}

export type RootActions = IDefaultAction | AuthTypes.IAuthActions;

export enum ActionTypes {
  DEFAULT = "DEFAULT"
}

export interface IDefaultAction {
  readonly type: ActionTypes.DEFAULT;
}

const rootReducer: Reducer<IRootState> = combineReducers({
  auth: authReducer
});

export const initStore = (initialState: IRootState) => {
  return createStore(
    rootReducer,
    initialState,
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(applyMiddleware(...middleware))
      : applyMiddleware(...middleware)
  );
};
