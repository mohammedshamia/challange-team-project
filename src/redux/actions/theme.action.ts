import { ToggleThemeAction, theme } from "../../@types/types";
import { notify } from "../../utils/helpers";
import { ThemeConstants } from "../contants/theme.constants";

export const toggleTheme = (theme: theme): ToggleThemeAction => {
  localStorage.setItem("theme", theme);
  notify("success", "Theme changed successfully");
  return {
    type: ThemeConstants.TOGGLE_THEME,
    payload: theme,
  };
};
