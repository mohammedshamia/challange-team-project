import { ThemeConstants } from "../contants/theme.constants";
import { ToggleThemeAction } from "../../@types/types";

const initial_state = localStorage.getItem("theme") || "light";

export const ThemeReducer = (
  state = initial_state,
  action: ToggleThemeAction
) => {
  switch (action.type) {
    case ThemeConstants.TOGGLE_THEME:
      return action.payload;
    default:
      return state;
  }
};
