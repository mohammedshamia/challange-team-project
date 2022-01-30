import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { ActionTypes, IUserForm } from "../../@types/users.types";
import { notify, uploadPhoto } from "../../utils/helpers";
import { UserConstants } from "../contants/user.constant";
import API from "../../api";
import { IUser } from "../../@types/auth.types";

export const editUser =
  (id: string, user: IUserForm, callback?: Function) =>
  async (dispatch: Dispatch<ActionTypes>) => {
    try {
      dispatch({
        type: UserConstants.EDIT_USER_START,
      });
      let profileImage: string = "";

      if (typeof user.profileImage === "object") {
        const { data } = await uploadPhoto(user.profileImage as File);
        profileImage = data;
      }

      const { data } = await API.put(`/users/${id}`, {
        ...user,
        profileImage: profileImage || user.profileImage,
      });

      callback?.();

      dispatch({
        type: UserConstants.EDIT_USER_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error.message);
      dispatch({
        type: UserConstants.EDIT_USER_FAIL,
        payload: error?.response?.data?.message || error.message,
      });
    }
  };

export const getUsers =
  (keyword: string = "", page: number = 1) =>
  async (dispatch: Dispatch<ActionTypes>) => {
    try {
      dispatch({
        type: UserConstants.GET_USERS_START,
      });
      const { data }: AxiosResponse = await API.get("/users", {
        params: { keyword: keyword, page: page },
      });
      dispatch({
        type: UserConstants.GET_USERS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error.message);
      dispatch({
        type: UserConstants.GET_USERS_FAIL,
        payload: error?.response?.data?.message || error.message,
      });
    }
  };

export const getAllUsers =
  (keyword: string = "", page: number = 1) =>
  async (dispatch: Dispatch<ActionTypes>) => {
    try {
      dispatch({
        type: UserConstants.GET_ALL_USERS_START,
      });

      const { data }: AxiosResponse = await API.get("/users?page=1");

      const allUsers: IUser[] = data.users;

      if ((data.pages as number) > 1) {
        const Promises = Array(data.pages as number)
          .fill(0)
          .map((_, index) => {
            return API.get(`/users?page=${index + 2}`);
          });

        const responses = await Promise.all(Promises);

        dispatch({
          type: UserConstants.GET_ALL_USERS_SUCCESS,
          payload: [
            ...allUsers,
            ...responses.map((res: AxiosResponse) => res.data.users),
          ],
        });
      } else {
        dispatch({
          type: UserConstants.GET_ALL_USERS_SUCCESS,
          payload: allUsers,
        });
      }
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error.message);
      dispatch({
        type: UserConstants.GET_ALL_USERS_FAIL,
        payload: error?.response?.data?.message || error.message,
      });
    }
  };

export const getUserByID =
  (id: string) => async (dispatch: Dispatch<ActionTypes>) => {
    try {
      dispatch({
        type: UserConstants.GET_USER_START,
      });

      const { data }: AxiosResponse = await API.get(`/users/${id}`);

      dispatch({
        type: UserConstants.GET_USER_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error.message);
      dispatch({
        type: UserConstants.GET_USER_FAIL,
        payload: error?.response?.data?.message || error.message,
      });
    }
  };

export const deleteUserByID =
  (id: string) => async (dispatch: Dispatch<ActionTypes>) => {
    try {
      dispatch({
        type: UserConstants.DELETE_USER_START,
      });

      const { data }: AxiosResponse = await API.delete(`/users/${id}`);

      dispatch({
        type: UserConstants.DELETE_USER_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error.message);
      dispatch({
        type: UserConstants.DELETE_USER_FAIL,
        payload: error?.response?.data?.message || error.message,
      });
    }
  };
