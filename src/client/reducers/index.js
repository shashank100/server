import { combineReducers } from "redux";
import socialModal from "src/client/reducers/socialModalReducer";
import loginStatus from "src/client/reducers/loginStatusReducer";

export default combineReducers({
  socialModal,
  loginStatus
});
