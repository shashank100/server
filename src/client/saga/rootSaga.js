import {
  watchForLoginSuccess
} from "src/client/saga/loginSaga"

export default function* rootSaga() {
    yield [
      watchForLoginSuccess()
    ];
}
