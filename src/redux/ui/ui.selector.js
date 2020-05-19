import { createSelector } from "reselect";

const menus = (state) => state.ui;

export const selectMenu = createSelector([menus], (ui) => ui.menu);
