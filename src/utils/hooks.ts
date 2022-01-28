import { useSelector } from "react-redux";
import { AppState } from "../redux/store";

export const useCart = (productID: string) => {
  const {
    cart: { items },
  } = useSelector((state: AppState) => state.cart);

  const cartItem = items.find((item) => item.product._id === productID);

  return Boolean(cartItem);
};
