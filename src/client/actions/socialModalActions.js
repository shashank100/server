import * as actionTypes from "src/client/constants/actionTypes";

export const openSocialModal = (open) => {
  return {
    type: actionTypes.OPEN_SOCIAL_LOGIN_MODAL,
    open
  }
};

export const closeSocialModal = (close) => {
  return {
    type: actionTypes.CLOSE_SOCIAL_LOGIN_MODAL,
    close
  }
};
