import SimpleBottomNavigation from "./ButtonNavigation";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Stack } from "@mui/material";

interface Iprops {
  wishlist: number;
  cartItems: number;
}

export default function BottonNavigationGroup(props: Iprops) {
  return (
    <Stack direction="row">
      <SimpleBottomNavigation
        label="Login / Sign up"
        icon={<PersonIcon />}
        path=""
      />
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
