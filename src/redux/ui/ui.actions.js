import { UiActionTypes } from "./ui.types";

export const setMenu = (status) => {
  return {
    type: UiActionTypes.SET_MENU,
    payload: status,
  };
};
