import {UserConstants} from "../redux/contants/user.constant";

export interface IUser{
    createdAt?:string;
    profileImage?: string;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
    dateOfBirth?: string;
    password?:string;
    updatedAt?:string;
    __v?:number;
    _id:string;

}
export interface IUserForm {
    firstName: string;
    lastName: string;
    email: string;
    password:string;
    isAdmin: boolean;
    dateOfBirth: string;
    profileImage: string;
}

export interface GET_USER_START {
    type: UserConstants.GET_USER_START;
}

export interface GET_USER_SUCCESS {
    type: UserConstants.GET_USER_SUCCESS;
    payload: IUser[];
}

export interface GET_USER_FAIL {
    type: UserConstants.GET_USER_FAIL;
    payload: string;
}

export interface EDIT_USER_START {
    type: UserConstants.EDIT_USER_START;
}

export interface EDIT_USER_SUCCESS {
    type: UserConstants.EDIT_USER_SUCCESS;
}

export interface EDIT_USER_FAIL {
    type: UserConstants.EDIT_USER_FAIL;
    payload: string;
}

export type ActionTypes =

    | GET_USER_START
    | GET_USER_SUCCESS
    | GET_USER_FAIL
    | EDIT_USER_START
    | EDIT_USER_SUCCESS
    | EDIT_USER_FAIL