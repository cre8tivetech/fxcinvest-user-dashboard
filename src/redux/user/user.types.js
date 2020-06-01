const UserActionTypes = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  CHECK_USER_SESSION: "CHECK_USER_SESSION",
  CHECK_AUTH: "CHECK_AUTH",

  FETCH_USER_START: "FETCH_USER_START",
  FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
  FETCH_USER_FAILURE: "FETCH_USER_FAILURE",

  TRANSFER_START: "TRANSFER_START",
  TRANSFER_SUCCESS: "TRANSFER_SUCCESS",
  TRANSFER_FAILURE: "TRANSFER_FAILURE",

  BANK_WITHDRAWAL_START: "BANK_WITHDRAWAL_START",
  BANK_WITHDRAWAL_SUCCESS: "BANK_WITHDRAWAL_SUCCESS",
  BANK_WITHDRAWAL_FAILURE: "BANK_WITHDRAWAL_FAILURE",

  BITCOIN_WITHDRAWAL_START: "BITCOIN_WITHDRAWAL_START",
  BITCOIN_WITHDRAWAL_SUCCESS: "BITCOIN_WITHDRAWAL_SUCCESS",
  BITCOIN_WITHDRAWAL_FAILURE: "BITCOIN_WITHDRAWAL_FAILURE",

  SET_TOKEN: "SET_TOKEN",
  SET_MESSAGE: "SET_MESSAGE",
  SET_POP_UP: "SET_POP_UP",
  SET_LOADING: "SET_LOADING",
  SET_AUTHENTICATING: "SET_AUTHENTICATING",
  EXPIRE_BITCOIN_INVOICE: "EXPIRE_BITCOIN_INVOICE",

  SIGN_IN_BY_TOKEN_START: "SIGN_IN_BY_TOKEN_START",
  SIGN_IN_BY_TOKEN_SUCCESS: "SIGN_IN_BY_TOKEN_SUCCESS",
  SIGN_IN_BY_TOKEN_FAILURE: "SIGN_IN_BY_TOKEN_FAILURE",

  CREATE_BITCOIN_INVOICE_START: "CREATE_BITCOIN_INVOICE_START",
  CREATE_BITCOIN_INVOICE_SUCCESS: "CREATE_BITCOIN_INVOICE_SUCCESS",
  CREATE_BITCOIN_INVOICE_FAILURE: "CREATE_BITCOIN_INVOICE_FAILURE",

  RESEND_CONFIRM_EMAIL_START: "RESEND_CONFIRM_EMAIL_START",
  RESEND_CONFIRM_EMAIL_SUCCESS: "RESEND_CONFIRM_EMAIL_SUCCESS",

  CHANGE_PASSWORD: "CHANGE_PASSWORD",

  FORGET_PASSWORD_START: "FORGET_PASSWORD_START",
  FORGET_PASSWORD_SUCCESS: "FORGET_PASSWORD_SUCCESS",

  RESET_PASSWORD: "RESET_PASSWORD",

  SIGN_UP_START: "SIGN_UP_START",
  SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
  SIGN_UP_FAILURE: "SIGN_UP_FAILURE",

  SIGN_OUT_START: "SIGN_OUT_START",
  SIGN_OUT_SUCCESS: "SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILURE: "SIGN_OUT_FAILURE",
};

export default UserActionTypes;
