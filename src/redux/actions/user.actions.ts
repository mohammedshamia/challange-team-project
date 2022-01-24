import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import {ActionTypes, IUserForm} from "../../@types/users.types";
import API from "../../api";
import { createFormData, notify } from "../../utils/helpers";
import { UserConstants } from "../contants/user.constant";

// export const editUser =
//     (data: IUserForm) => async (dispatch: Dispatch<ActionTypes>) => {
//         try {
//             dispatch({
//                 type: UserConstants.EDIT_USER_START,
//             });
//             const promises = [...data.images].map((image) => {
//                 return API.post("/upload", createFormData(image));
//             });
//             const urls = await Promise.all<AxiosResponse>(promises);
//             const form = { ...data, images: [...urls.map((url) => url.data)] };
//             await API.post("/products", form);
//             dispatch({
//                 type: UserConstants.EDIT_USER_START,
//             });
//         } catch (error: any) {
//             notify("error", error?.response?.data?.message || error.message);
//             dispatch({
//                 type: UserConstants.EDIT_USER_FAIL,
//                 payload: error?.response?.data?.message || error.message,
//             });
//         }
//     };
//

export const getUsers =
    (keyword: string = "", page: number = 1) =>
        async (dispatch: Dispatch<ActionTypes>) => {
            try {
                dispatch({
                    type: UserConstants.GET_USER_START,
                });
                const { data }: AxiosResponse = await API.get("/users", {
                    params: { keyword: keyword, page: page },
                });
             
                dispatch({
                    type: UserConstants.GET_USER_SUCCESS,
                    payload: data
                });
            } catch (error: any) {
                notify("error", error?.response?.data?.message || error.message);
                dispatch({
                    type: UserConstants.GET_USER_FAIL,
                    payload: error?.response?.data?.message || error.message,
                });
            }
        };

