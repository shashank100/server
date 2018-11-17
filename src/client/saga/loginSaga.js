import { takeLatest } from "redux-saga";
import { put, select, call } from "redux-saga/effects";
import { updateUser } from "src/client/services/userUpdateService";
import { Redirect } from "react-router-dom";
import { find } from "lodash";
import {
  FB_LOGIN_SUCCESS,
  USER_UPDATE_SUCCESS,
  UPDATE_USER
} from "src/client/constants/actionTypes";

function* setUserData(action) {
  try {
    const stores = yield call(updateUser, action.data);
    yield put({ type: USER_UPDATE_SUCCESS, isUserLoggedIn: true });
  } catch (err) {
    console.log("setUserData error");
    //  yield put({ type: ERROR, message: "Set Selected Store Error" });
  }
}


export function* watchForLoginSuccess() {
  yield takeLatest(UPDATE_USER, setUserData);
}
