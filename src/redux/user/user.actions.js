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

export const fetchUserStart = () => ({
  type: UserActionTypes.FETCH_USER_START,
});

export const fetchUserSuccess = (data) => ({
  type: UserActionTypes.FETCH_USER_SUCCESS,
  payload: data,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const checkAuth = () => ({
  type: UserActionTypes.CHECK_AUTH,
});

export const setPopUp = (messages) => ({
  type: UserActionTypes.SET_POP_UP,
  payload: messages,
});

export const setInvestData = (data) => ({
  type: UserActionTypes.SET_INVEST_DATA,
  payload: data,
});

export const expireBitCoinInvoice = () => ({
  type: UserActionTypes.EXPIRE_BITCOIN_INVOICE,
});

export const goToDashboard = () => ({
  type: UserActionTypes.GO_TO_DASHBOARD,
});

export const transferStart = (data) => ({
  type: UserActionTypes.TRANSFER_START,
  payload: data,
});

export const bankWithdrawalStart = (data) => ({
  type: UserActionTypes.BANK_WITHDRAWAL_START,
  payload: data,
});

export const bitcoinWithdrawalStart = (data) => ({
  type: UserActionTypes.BITCOIN_WITHDRAWAL_START,
  payload: data,
});

export const createBitCoinInvoiceStart = (amount) => ({
  type: UserActionTypes.CREATE_BITCOIN_INVOICE_START,
  payload: amount,
});

export const createBitCoinInvoiceSuccess = (invoice) => ({
  type: UserActionTypes.CREATE_BITCOIN_INVOICE_SUCCESS,
  payload: invoice,
});

export const investStart = (data) => ({
  type: UserActionTypes.INVEST_START,
  payload: data,
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
