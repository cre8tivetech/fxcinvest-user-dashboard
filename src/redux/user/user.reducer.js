import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  success: null,
  error: null,
  isLoading: null,
  isAuth: null,
  token: null,
  currentUser: null,
  popUp: null,
  bitCoinInvoice: null,
  investData: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //Either any of the cases
    case UserActionTypes.GO_TO_DASHBOARD:
      return {
        ...state,
        // isLoading: true,
        error: null,
        success: null,
      };
    case UserActionTypes.CHECK_AUTH:
      return {
        ...state,
        isLoading: true,
        error: null,
        success: null,
        popUp: null,
      };

    case UserActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        success: null,
      };

    case UserActionTypes.CHECK_USER_SESSION:
      return {
        ...state,
        error: null,
        success: null,
      };

    case UserActionTypes.CREATE_BITCOIN_INVOICE_SUCCESS:
      return {
        ...state,
        bitCoinInvoice: action.payload,
        error: null,
        success: null,
      };
    case UserActionTypes.EXPIRE_BITCOIN_INVOICE:
      return {
        ...state,
        bitCoinInvoice: null,
        error: null,
        success: null,
      };
    case UserActionTypes.SET_INVEST_DATA:
      return {
        ...state,
        investData: action.payload,
        error: null,
        success: null,
        popUp: null,
      };
    case UserActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
        error: null,
        success: null,
        popUp: null,
      };
    case UserActionTypes.SET_POP_UP:
      return {
        ...state,
        popUp: action.payload,
        error: null,
        success: null,
      };
    case UserActionTypes.SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
        error: null,
        success: null,
      };
    case UserActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
        // message: null,
        error: null,
        success: null,
        // paymentData: null,
      };

    case UserActionTypes.RESEND_CONFIRM_EMAIL_SUCCESS:
      return {
        ...state,
        isLoading: null,
        message: null,
        error: null,
        success: action.payload,
        // paymentData: null,
      };

    case UserActionTypes.FORGET_PASSWORD_START:
      return {
        ...state,
        isLoading: true,
        error: null,
        success: null,
      };
    case UserActionTypes.FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        success: null,
      };
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        isLoading: true,
        currentUser: null,
        token: null,
        error: null,
        success: null,
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_IN_BY_TOKEN_START:
      return {
        ...state,
        success: null,
        error: null,
        isLoading: true,
        currentUser: null,
        token: null,
      };
    case UserActionTypes.SIGN_IN_BY_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        currentUser: null,
        subscription: null,
        downloads: null,
        token: null,
        error: null,
      };
    case UserActionTypes.SIGN_IN_BY_TOKEN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
