import React from "react";
import Logo from "../../Logo";
import Search from "../../Search";
import { HeaderBox } from "./Header.style";
import BottonNavigationGroup from "../../ButtomNavigation";
export default function Header() {
  return (
    <HeaderBox>
      <Logo />
      <Search />
      <BottonNavigationGroup cartItems={2} wishlist={3} />
    </HeaderBox>
  );
}
