import { useCallback } from "react";
import Logo from "../../Logo";
import Search from "../../Search";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/actions/theme.action";
import { HeaderBox, ButtonIcon } from "./Header.style";
import BottonNavigationGroup from "../../ButtomNavigation";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { AppState } from "../../../redux/store";

export default function Header() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: AppState) => state);

  const toggleTheme_ = useCallback(() => {
    dispatch(toggleTheme(theme === "light" ? "dark" : "light"));
  }, [theme, dispatch]);

  return (
    <HeaderBox>
      <Logo />
      <Search />
      
        <BottonNavigationGroup cartItems={2} wishlist={3} />
        <ButtonIcon onClick={toggleTheme_} aria-label="toggle-theme">
          {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </ButtonIcon>
  
    </HeaderBox>
  );
}
