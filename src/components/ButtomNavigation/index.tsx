import SimpleBottomNavigation from "./ButtonNavigation";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Iprops {
  wishlist: number;
  cartItems: number;
}

export default function BottonNavigationGroup(props: Iprops) {
  const navigate = useNavigate();
  return (
    <Stack direction="row">
      <SimpleBottomNavigation
        label="Login / Sign up"
        icon={<PersonIcon />}
        path=""
        onClick={() => navigate("/auth/login")}
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
