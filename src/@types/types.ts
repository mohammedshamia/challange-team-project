import { ThemeConstants } from "../redux/contants/theme.constants";
export type theme = "light" | "dark";

export interface ToggleThemeAction {
  type: ThemeConstants.TOGGLE_THEME;
  payload: theme;
}
