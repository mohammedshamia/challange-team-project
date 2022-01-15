// import React from "react";
// import Logo from "../../Logo";
// import Search from "../../Search";
// import { HeaderBox } from "./Header.style";
// import BottonNavigationGroup from "../../ButtomNavigation";
// export default function Header() {
//   return (
//     <HeaderBox>
//       <Logo />
//       <Search />
//       <BottonNavigationGroup cartItems={2} wishlist={3} />
//     </HeaderBox>
//   );
// }

// import AppBar from "@mui/material/AppBar";
// import { typography } from "@mui/system";
// import React from "react";

// export default function index() {
//   return (
//     <AppBar
//       sx={{ padding: "0 5%", backgroundColor: "black", height: "85px" }}
//     >
//       <typography></typography>
//     </AppBar>
//   );
// }

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../Logo";
import Search from "../../Search/index";
import BottonNavigationGroup from "../../ButtomNavigation";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        height: "85px",
        padding: "0 7% !important",
        justifyContent: "center",
      }}
    >
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: "99", display: { xs: "block", lg: "none" } }}>
          <Logo />
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
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
              display: { xs: "block", lg: "none" },
            }}
          >
            <Search />
            <BottonNavigationGroup wishlist={9} cartItems={98} />
          </Menu>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: {
              xs: "none",
              lg: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <Logo />
          <Search />
          <BottonNavigationGroup wishlist={9} cartItems={98} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
