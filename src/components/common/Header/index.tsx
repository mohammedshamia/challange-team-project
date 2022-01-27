import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../Logo";
import Search from "../../Search/index";
import BottonNavigationGroup from "../../ButtomNavigation";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import { toggleTheme } from "../../../redux/actions/theme.actions";
import { ButtonIcon, FlexBox, HeaderBox, Toolbar } from "./Header.style";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Item } from "../../../@types/cart.types";
import { useLocation } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const {
    theme,
    cart: { cart },
    auth: {
      user: { isAdmin },
    },
  } = useSelector((state: AppState) => state);
  const isAuth = pathname.includes("auth");
  const toggleTheme_ = React.useCallback(() => {
    dispatch(toggleTheme(theme === "light" ? "dark" : "light"));
  }, [theme, dispatch]);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = React.useCallback(() => {
    setAnchorElNav(null);
  }, []);
  console.log(pathname);
  return (
    <HeaderBox>
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: "99", display: { xs: "block", lg: "none" } }}>
          <Logo />
        </Box>
        <Box sx={{ display: { xs: "flex", lg: "none" } }}>
          <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              "& label": {
                marginBottom: "35px",
              },
              "& ul": {
                padding: "7px",
                backgroundColor: "#242424",
              },
              textAlign: "center",
              display: { xs: "block", lg: "none" },
            }}
          >
            <Search width="100%" />
            <FlexBox>
              <BottonNavigationGroup
                isAdmin={isAdmin}
                wishlist={9}
                cartItems={Object.keys(cart.items as Item[]).length || 0}
              />
              <ButtonIcon onClick={toggleTheme_} aria-label="toggle-theme">
                {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
              </ButtonIcon>
            </FlexBox>
          </Menu>
        </Box>
        <Box
          sx={{
            flexGrow: "99",
            display: {
              xs: "none",
              lg: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <Logo />
          {!isAuth && <Search />}
          <FlexBox>
            {!isAuth && (
              <BottonNavigationGroup
                isAdmin={isAdmin}
                wishlist={9}
                cartItems={Object.keys(cart.items as Item[]).length || 0}
              />
            )}
            <ButtonIcon onClick={toggleTheme_} aria-label="toggle-theme">
              {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            </ButtonIcon>
          </FlexBox>
        </Box>
      </Toolbar>
    </HeaderBox>
  );
}
