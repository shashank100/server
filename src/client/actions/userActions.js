import * as actionTypes from "src/client/constants/actionTypes";

export const updateUser = (data) => {
  return {
      type: actionTypes.UPDATE_USER,
      data
  }
};
