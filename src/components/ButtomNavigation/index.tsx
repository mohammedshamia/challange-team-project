import SimpleBottomNavigation from "./ButtonNavigation";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

interface Iprops {
  wishlist: number;
  cartItems: number;
}

export default function BottonNavigationGroup(props: Iprops) {
  return (
    <Stack direction="row">
      <Link to="/auth/login" style={{ textDecoration: "none" }}>
        <SimpleBottomNavigation
          label="Login / Sign up"
          icon={<PersonIcon />}
          path=""
        />
      </Link>
      <SimpleBottomNavigation
        path=""
        label="Wishlist"
        icon={<BookmarkIcon />}
        badgeContent={props.wishlist}
      />
      <SimpleBottomNavigation
        path="/shopping-cart"
        label="Cart"
        icon={<ShoppingCartIcon />}
        badgeContent={props.cartItems}
      />
    </Stack>
  );
}
