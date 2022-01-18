import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { LogoBox } from "./LogoBox.style";

export default function Logo() {
  return (
    <LogoBox as={Link} to="/">
      <Typography
        sx={{
          color: "#FCDD06",
          display: "inline",
          fontSize: "40px",
          fontWeight: "900",
          letterSpacing: "2px",
        }}
      >
        Pro
      </Typography>
      <Typography
        sx={{
          display: "inline",
          fontSize: "40px",
          fontWeight: "900",
          letterSpacing: "2px",
        }}
      >
        Shop
      </Typography>
    </LogoBox>
  );
}
