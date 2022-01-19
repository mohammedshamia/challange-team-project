import { ThemeConstants } from "../redux/contants/theme.constants";
export type theme = "light" | "dark";

export interface ToggleThemeAction {
  type: ThemeConstants.TOGGLE_THEME;
  payload: "light" | "dark";
}

export interface IProduct {
  countInStock: number;
  discount: number;
  price: number;
  description: string;
  brand: string;
  name: string;
}
