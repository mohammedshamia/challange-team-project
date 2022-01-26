import { AxiosPromise, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { IUser } from "../@types/auth.types";
import {
  Categories,
  ICategory,
  Products,
  IProduct,
} from "../@types/products.types";
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
  return price - discount;
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

export const formatProducts = (data: IProduct[]) => {
  let arr: Products[] = [];
  data.forEach((c, index) => {
    if (index % 3 === 0) {
      arr.push({ id: arr.length, products: [] } as Products);
    }
    let current: Products = arr[arr.length - 1];
    current = {
      ...current,
      products: [...(current as Products)?.products, c],
    };
    arr[arr.length - 1] = current;
  });
  return arr;
};

export const fetchAllProducts = async (maxPages: number) => {
  const promises: any[] = Array(maxPages)
    .fill("")
    .map((product, index) =>
      API.get("/products", { params: { pageNumber: index + 1 } })
    );

  const allProducts: AxiosResponse[] = await Promise.all<AxiosResponse>(
    promises
  );

  const products: IProduct[] = allProducts
    .map((product: AxiosResponse) => product.data.products)
    .flat();

  return products;
};

export const fetchAllUsers = async (maxPages: number) => {
  const promises: any[] = Array(maxPages)
    .fill("")
    .map((user, index) =>
      API.get("/users", { params: { pageNumber: index + 1 } })
    );

  const allUsers: AxiosResponse[] = await Promise.all<AxiosResponse>(promises);

  const users: IUser[] = allUsers
    .map((user: AxiosResponse) => user.data.users)
    .flat();

  return users;
};

export const uploadPhoto = (image: File): AxiosPromise<string> => {
  const formData = createFormData(image);
  return API.post("/upload", formData) as AxiosPromise<string>;
};
