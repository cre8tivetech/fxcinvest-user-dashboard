import { takeLatest, put, all, call, delay } from "redux-saga/effects";
import { select } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {
  signUpApi,
  signInApi,
  signInByTokenApi,
  resetPasswordApi,
} from "../../api/authApi";
import {
  setMessage,
  signInByTokenFailure,
  signInFailure,
  signInByTokenSuccess,
  signOutStart,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess,
  forgetPasswordSuccess,
  setToken,
} from "./user.actions";

const userToken = (state) => state.user.token.key;
const userExpire = (state) => state.user.token.expire;

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    yield put(signInByTokenSuccess(userAuth));
  } catch (error) {
    yield put(
      signInByTokenFailure(
        error.response
          ? error.response.data.message || error.response.data.error
          : "Oops!!, Poor internet connection, Please check your connectivity, And try again"
      )
    );
  }
}

// export function* signIn({ payload: { email, password } }) {
//   try {
//     const result = yield signInApi(email, password).then(function (response) {
//       return response.data;
//     });
//     // const token = {
//     //   key: result.token,
//     //   expire: tokenExpiration(),
//     // };
//     // console.log(result);
//     yield put(setToken(result));
//     yield put(signInByTokenSuccess("Signin was successful"));
//     console.log(result);
//     // yield getSnapshotFromUserAuth(result.user);
//   } catch (error) {
//     yield put(
//       signInByTokenFailure(
//         error.response
//           ? error.response.data.detail || error.response.data.error
//           : "Sign in failed, Please check your connectivity, And try again"
//       )
//     );
//   }
// }

export function* signByToken({ payload: { uid, token } }) {
  try {
    const result = yield signInByTokenApi(uid, token).then(function (response) {
      return response.data;
    });
    if (result) {
      console.log(result);
      const date = new Date();
      const expireDate = date.getTime() + result.expires_in * 1000;
      // console.log(d2);
      const tokens = {
        key: result.token,
        expire: expireDate,
      };
      yield put(setToken(tokens));
      yield getSnapshotFromUserAuth(result.user);
    }
  } catch (error) {
    yield put(
      signInByTokenFailure(
        error.response
          ? error.response.data.detail || error.response.data.error
          : "Oops!!, Poor internet connection, Please check your connectivity, And try again"
      )
    );
  }
}

export function* isUserAuthenticated() {
  try {
    const expire = yield select(userExpire);
    if (new Date(expire) <= new Date(Date.now())) {
      const message = "Login Session as expired, 🙏 Please re-login!!";
      yield put(setMessage({ type: "error", message: message }));
      yield delay(3000);
      yield put(signOutStart());
      yield delay(2000);
      yield put(setMessage(null));
    }
  } catch (error) {
    yield delay(5000);
    yield put(setMessage(null));
  }
}

export function* isResetPassword({ payload: { token, new_password } }) {
  try {
    const result = yield resetPasswordApi(token, new_password).then(function (
      response
    ) {
      return response.data;
    });
    if (result) {
      yield put(setMessage({ type: "success", message: result.message }));
      yield delay(6000);
      yield put(setMessage(null));
    }
  } catch (error) {
    yield put(
      setMessage({
        type: "error",
        message: error.response
          ? error.response.data.message || error.response.data.error
          : "Oops!!, Poor internet connection, Please check your connectivity, And try again",
      })
    );
    yield delay(5000);
    yield put(setMessage(null));
  }
}

export function* signOut() {
  try {
    yield delay(3000);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signUp({ payload: { userName, email, password } }) {
  try {
    // const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const result = yield signUpApi(userName, email, password).then(function (
      response
    ) {
      return response.data.data;
    });
    yield put(signUpSuccess(result));
  } catch (error) {
    yield put(
      signUpFailure(
        error.response
          ? error.response.data.message || error.response.data.error
          : "Oops!!, Poor internet connection, Please check your connectivity, And try again"
      )
    );
  }
}

// export function* signInAfterSignUp({ payload: { user, additionalData } }) {
//   yield getSnapshotFromUserAuth(user, additionalData);
// }

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignInByTokenStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_BY_TOKEN_START, signByToken);
}

export function* onResetPassword() {
  yield takeLatest(UserActionTypes.RESET_PASSWORD, isResetPassword);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

// export function* onSignUpSuccess() {
//   yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
// }

export function* userSagas() {
  yield all([
    call(onSignInByTokenStart),
    call(onResetPassword),
    call(onSignOutStart),
    call(onSignUpStart),
    // call(onSignUpSuccess),
  ]);
}
