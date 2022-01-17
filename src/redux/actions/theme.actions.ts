import { ToggleThemeAction, theme } from "../../@types/types";
import { ThemeConstants } from "../contants/theme.constants";

export const toggleTheme = (theme: theme): ToggleThemeAction => {
  localStorage.setItem("theme", theme);
  return {
    type: ThemeConstants.TOGGLE_THEME,
    payload: theme,
  };
};
