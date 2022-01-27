import SimpleBottomNavigation from "./ButtonNavigation";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Stack } from "@mui/material";
import { Link } from "./BottonNavigation.style";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import Dropdown from "../common/Header/Dropdown";
interface Iprops {
  wishlist: number;
  cartItems: number;
  username?: string;
  isAdmin?: boolean;
}

export default function BottonNavigationGroup(props: Iprops) {
  const {
    auth,
    cart: {
      cart: { items },
    },
  } = useSelector((state: AppState) => state);

  return (
    <Stack direction="row">
      <Dropdown auth={auth} />
      {auth.isAuthenticated && (
        <Link to={"/shopping-cart"}>
          <SimpleBottomNavigation
            path="/shopping-cart"
            label="Cart"
            icon={<ShoppingCartIcon />}
            badgeContent={Object.keys(items).length}
          />
        </Link>
      )}
    </Stack>
  );
}
