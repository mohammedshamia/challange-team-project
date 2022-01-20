import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { IUser } from "../@types/auth.types";

const user = localStorage.getItem("user-data") || "";

export const baseURL = "https://prohop-express.herokuapp.com";

const Axios: AxiosInstance = axios.create({
  baseURL: `${baseURL}/api`,
});

Axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const { token } = (user && (JSON.parse(user) as IUser)) || { token: "" };
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default class API {
  static async get(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return Axios.get(url, config || {});
  }

  static async post<T>(
    url: string,
    body: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return Axios.post(url, body, config || {});
  }

  static async put<T>(url: string, body: T): Promise<AxiosResponse> {
    return Axios.put(url, body);
  }
  static async delete(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return Axios.delete(url, config || {});
  }
}
