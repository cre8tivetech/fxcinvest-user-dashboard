import { UiActionTypes } from "./ui.types";

const INITIAL_STATE = {
  menu: false,
};
const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UiActionTypes.SET_MENU:
      return {
        ...state,
        menu: action.payload,
      };

    default:
      return state;
  }
};

export default uiReducer;
