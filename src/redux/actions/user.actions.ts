import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import {ActionTypes, IUserForm} from "../../@types/users.types";
import API from "../../api";
import {  notify } from "../../utils/helpers";
import { UserConstants } from "../contants/user.constant";

// export const editUser =
//     (data: IUserForm) => async (dispatch: Dispatch<ActionTypes>) => {
//         try {
//             dispatch({
//                 type: UserConstants.EDIT_USER_START,
//             });
//             const { data }: AxiosResponse = await API.put(``);
//             dispatch({
//                 type: UserConstants.EDIT_USER_START,
//                 payload: data,
//             });
//
//         } catch (error: any) {
//             notify("error", error?.response?.data?.message || error.message);
//             dispatch({
//                 type: UserConstants.EDIT_USER_FAIL,
//                 payload: error?.response?.data?.message || error.message,
//             });
//         }
//     };

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
                    payload: data
                });
            } catch (error: any) {
                notify("error", error?.response?.data?.message || error.message);
                dispatch({
                    type: UserConstants.GET_USERS_FAIL,
                    payload: error?.response?.data?.message || error.message,
                });
            }
        };

export const getUser =
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

