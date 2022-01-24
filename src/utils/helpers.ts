import { toast } from "react-toastify";

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
  return price - (discount / 100) * price;
};

export const minimizeID = (id: string) =>
  id?.replace(/^61ec6095edddbd1f4c/g, "#");
// ?.match(/^(\w{2})|-(\w{2})/g)
// ?.join("")
// ?.replace(/-/g, "");


export const formatDate = (date_:Date) => {
  date_ = new Date(date_);
  const day = ("0" + date_.getDate()).slice(-2);
  const month = ("0" + (date_.getMonth() + 1)).slice(-2);
  const date = date_.getFullYear() + "-" + month + "-" + day ;
  return date;
}