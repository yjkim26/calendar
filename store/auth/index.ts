import * as AuthTypes from "./types";
import { setLoggedIn, logout, login } from "./actions";
import authReducer from "./reducer";

export { AuthTypes, setLoggedIn, logout, login };
export default authReducer;
