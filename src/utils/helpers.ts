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
