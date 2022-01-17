import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { IUser } from "../@types/auth.types";

const Axios: AxiosInstance = axios.create({
  baseURL: "https://prohop-express.herokuapp.com/api",
});

export default class API {
  static async get(url: string): Promise<AxiosResponse> {
    return Axios.get(url, {});
  }

  static async post<T>(url: string, body: T): Promise<AxiosResponse> {
    return Axios.post(url, body, {});
  }

  static async put<T>(url: string, body: T): Promise<AxiosResponse> {
    return Axios.put(url, body);
  }
  static async delete(url: string): Promise<AxiosResponse> {
    return Axios.delete(url, {});
  }
}
