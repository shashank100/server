import * as actionTypes from "src/client/constants/actionTypes";

export const fbLoginSuccess = (data) => {
  return {
    type: actionTypes.FB_LOGIN_SUCCESS,
    data
  }
};

export const fbLoginFailure = () => {
  return {
    type: actionTypes.FB_LOGIN_FAILURE,
  }
};

export const fbLogoutSuccess = () => {
  return {
    type: actionTypes.FB_LOGOUT_SUCCESS
  }
};
