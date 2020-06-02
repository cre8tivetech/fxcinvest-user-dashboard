import { takeLatest, put, all, call, delay } from "redux-saga/effects";
import { select } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {
  signUpApi,
  signInApi,
  signInByTokenApi,
  resetPasswordApi,
  resendConfirmEmailApi,
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
  setPopUp,
  createBitCoinInvoiceStart,
  createBitCoinInvoiceSuccess,
  fetchUserSuccess,
  resendConfirmEmailSuccess,
} from "./user.actions";
import { createBitcoinInvoiceApi } from "../../api/payment";
import {
  fetchUserApi,
  transferApi,
  bitcoinWithdrawalApi,
  investApi,
} from "../../api/api";

const userToken = (state) => state.user.token.key;
const userExpire = (state) => state.user.token.expire;
const userId = (state) => state.user.currentUser.id;

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

export function* isFetchUser() {
  const token = yield select(userToken);
  const uid = yield select(userId);
  try {
    const result = yield fetchUserApi(token, uid).then(function (response) {
      return response.data;
    });
    // console.log(result);
    if (result) {
      yield put(fetchUserSuccess(result));
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
      const message = "Login Session has expired, 🙏 Please re-login!!";
      yield put(setPopUp({ type: "error", message: message }));
      yield delay(3000);
      yield put(signOutStart());
      yield delay(5000);
      yield put(setPopUp(null));
    }
  } catch (error) {
    yield delay(5000);
    yield put(setMessage(null));
  }
}

export function* resendConfirmEmail() {
  const token = yield select(userToken);
  try {
    const result = yield resendConfirmEmailApi(token).then(function (response) {
      return response.data;
    });
    console.log(result);
    yield put(resendConfirmEmailSuccess(result.message));
    // yield delay(6000);
    // yield put(setMessage(null));
  } catch (error) {
    console.log(error);
    // yield put(
    //   setMessage({
    //     type: "error",
    //     message: error.response
    //       ? error.response.data.message || error.response.data.error
    //       : "Oops!!, Poor internet connection, Please check your connectivity, And try again",
    //   })
    // );
    // yield delay(5000);
    // yield put(setMessage(null));
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

export function* isCreateBitCoinInvoice({ payload: amount }) {
  const token = yield select(userToken);
  try {
    const result = yield createBitcoinInvoiceApi(token, amount).then(function (
      response
    ) {
      return response.data;
    });
    console.log(result.data);
    if (result) {
      let d = new Date();
      let v = new Date();
      v.setMinutes(d.getMinutes() + 15);
      // let goid = console.log(new Date(result.data.timeout * 1000));
      // console.log(goid);
      yield put(
        createBitCoinInvoiceSuccess({
          ...result.data,
          amount_in_dollars: amount,
          // expire: v,
        })
      );
      yield put(setPopUp({ type: result.status, message: result.message }));
      yield delay(8000);
      yield put(setPopUp(null));
    }
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

export function* isTransfer({ payload: { amount, username } }) {
  const token = yield select(userToken);
  try {
    const result = yield transferApi(token, amount, username).then(function (
      response
    ) {
      return response.data;
    });
    if (result) {
      yield put(setPopUp({ type: result.status, message: result.message }));
      yield delay(6000);
      yield put(setPopUp(null));
    }
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

export function* isBitcoinWithdrawal({
  payload: { amount, wallet_address, withdrawal_type, transaction_type },
}) {
  const token = yield select(userToken);
  try {
    const result = yield bitcoinWithdrawalApi(
      token,
      amount,
      wallet_address,
      withdrawal_type,
      transaction_type
    ).then(function (response) {
      return response.data;
    });
    withdrawal_type = "Earning balances";
    yield put(
      setPopUp({
        type: result.status,
        message: result.message,
        details: { ...result.data, withdrawal_type, transaction_type },
      })
    );
  } catch (error) {
    console.log(error.response.data.message);
    yield put(
      setPopUp(
        error.response
          ? {
              type: error.response.data.status,
              message: error.response.data.message || error.response.data.error,
            }
          : "Oops!!, Poor internet connection, Please check your connectivity, And try again"
      )
    );
    yield delay(7000);
    yield put(setPopUp(null));
    // signUpFailure(
    //   error.response
    //     ? error.response.data.message || error.response.data.error
    //     : "Oops!!, Poor internet connection, Please check your connectivity, And try again"
    //
  }
}

export function* isInvest({ payload: { plan, amount } }) {
  const token = yield select(userToken);
  try {
    const result = yield investApi(token, plan, amount).then(function (
      response
    ) {
      return response.data;
    });
    console.log(result);
    yield isFetchUser();
    yield put(
      setPopUp({
        type: result.status,
        message: result.message,
        details: result.data,
      })
    );
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(
      setPopUp(
        error.response
          ? {
              type: "error",
              message: error.response.data.message || error.response.data.error,
            }
          : "Oops!!, Poor internet connection, Please check your connectivity, And try again"
      )
    );
    yield delay(7000);
    yield put(setPopUp(null));
    // signUpFailure(
    //   error.response
    //     ? error.response.data.message || error.response.data.error
    //     : "Oops!!, Poor internet connection, Please check your connectivity, And try again"
    //
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onFetchUser() {
  yield takeLatest(UserActionTypes.FETCH_USER_START, isFetchUser);
}

export function* onCreateBitCoinInvoiceStart() {
  yield takeLatest(
    UserActionTypes.CREATE_BITCOIN_INVOICE_START,
    isCreateBitCoinInvoice
  );
}

export function* onTransferStart() {
  yield takeLatest(UserActionTypes.TRANSFER_START, isTransfer);
}

export function* onBitcoinWithdrawalStart() {
  yield takeLatest(
    UserActionTypes.BITCOIN_WITHDRAWAL_START,
    isBitcoinWithdrawal
  );
}

export function* onInvestStart() {
  yield takeLatest(UserActionTypes.INVEST_START, isInvest);
}

export function* onSignInByTokenStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_BY_TOKEN_START, signByToken);
}

export function* onResendConfirmEmail() {
  yield takeLatest(
    UserActionTypes.RESEND_CONFIRM_EMAIL_START,
    resendConfirmEmail
  );
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
    call(onCheckUserSession),
    call(onFetchUser),
    call(onCreateBitCoinInvoiceStart),
    call(onTransferStart),
    call(onBitcoinWithdrawalStart),
    call(onInvestStart),
    call(onSignInByTokenStart),
    call(onResendConfirmEmail),
    call(onResetPassword),
    call(onSignOutStart),
    call(onSignUpStart),
    // call(onSignUpSuccess),
  ]);
}
