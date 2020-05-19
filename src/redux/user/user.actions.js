import UserActionTypes from "./user.types";

export const signInByTokenStart = (uidAndToken) => ({
  type: UserActionTypes.SIGN_IN_BY_TOKEN_START,
  payload: uidAndToken,
});

export const signInByTokenSuccess = (message) => ({
  type: UserActionTypes.SIGN_IN_BY_TOKEN_SUCCESS,
  payload: message,
});

export const signInByTokenFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_BY_TOKEN_FAILURE,
  payload: error,
});

export const goToDashboard = () => ({
  type: UserActionTypes.GO_TO_DASHBOARD,
});

export const resendConfirmEmailStart = () => ({
  type: UserActionTypes.RESEND_CONFIRM_EMAIL_START,
});

export const resendConfirmEmailSuccess = (message) => ({
  type: UserActionTypes.RESEND_CONFIRM_EMAIL_SUCCESS,
  payload: message,
});

export const changePassword = (passwords) => ({
  type: UserActionTypes.CHANGE_PASSWORD,
  payload: passwords,
});

export const resetPassword = (resetData) => ({
  type: UserActionTypes.RESET_PASSWORD,
  payload: resetData,
});

export const setToken = (token) => ({
  type: UserActionTypes.SET_TOKEN,
  payload: token,
});

export const setDownloads = (data) => ({
  type: UserActionTypes.SET_DOWNLOADS,
  payload: data,
});

export const setSubscription = (subData) => ({
  type: UserActionTypes.SET_SUBSCRIPTION,
  payload: subData,
});

export const setMessage = (message) => ({
  type: UserActionTypes.SET_MESSAGE,
  payload: message,
});

export const setLoading = (condition) => ({
  type: UserActionTypes.SET_LOADING,
  payload: condition,
});

export const setPaymentData = (txref) => ({
  type: UserActionTypes.SET_PAYMENT_DATA,
  payload: txref,
});
export const userPaymentStart = (txref) => ({
  type: UserActionTypes.USER_PAYMENT_START,
  payload: txref,
});

export const userPaymentSucesss = (ref) => ({
  type: UserActionTypes.USER_PAYMENT_SUCCESS,
});

export const userPaymentFailure = (message) => ({
  type: UserActionTypes.USER_PAYMENT_FAILURE,
  payload: message,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = (message) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: message,
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
