import { AxiosPromise } from "axios";
import { toast } from "react-toastify";
import { ICart, Item } from "../@types/cart.types";
import { Categories, ICategory } from "../@types/products.types";
import API from "../api";

export type toastType = "info" | "success" | "warning" | "error" | "default";

export const notify = (type: toastType, message: string) =>
  toast(message, { type: type });

const addDecimals = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const calculatePrice = (items: any[]) => {
  return addDecimals(
    items.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
};

export const createFormData = (image: File) => {
  let data = new FormData();
  data.append("image", image);
  return data;
};

export const calculateDiscount = (price: number, discount: number): number => {
  return price - discount ;
};

export const minimizeID = (id: string) =>
  id?.replace(/^61ec6095edddbd1f4c/g, "#");

export const formatCategory = (category: ICategory[]) => {
  let arr: Categories[] = [];
  category.forEach((c, index) => {
    if (index % 4 === 0) {
      arr.push({ id: arr.length, categories: [] } as Categories);
    }
    let current: Categories = arr[arr.length - 1];
    current = {
      ...current,
      categories: [...(current as Categories)?.categories, c],
    };
    arr[arr.length - 1] = current;
  });
  return arr;
};

// export const formatCart = (cart: Cart) => {
//   let cart_ = {};
//   let cartItems: ICartItems = {};

//   (cart.items as Item[]).forEach((item: Item) => {
//     cartItems[item.product?._id as string] = item;
//   });

//   const sorted = Object.entries(cartItems).sort((a, b) =>
//     a > b ? 1 : b > a ? -1 : 0
//   );

//   cart_ = {
//     ...cart,
//     items: Object.fromEntries(sorted),
//   };

//   return cart_ as ICart;
// };

export const uploadPhoto = (image: File): AxiosPromise<string> => {
  const formData = createFormData(image);
  return API.post("/upload", formData) as AxiosPromise<string>;
};
