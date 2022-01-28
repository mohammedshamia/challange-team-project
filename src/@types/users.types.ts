import { UserConstants } from "../redux/contants/user.constant";

export interface IUserForm {
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  dateOfBirth: string | Date;
  profileImage?: string | File;
  _id?: string;
  password?: string;
}

export interface IUser {
  createdAt?: string;
  profileImage?: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  dateOfBirth?: string;
  updatedAt?: string;
  toker?: string;
  __v?: number;
  _id: string;
}

export interface GET_USERS_START {
  type: UserConstants.GET_USERS_START;
}

export interface GET_USERS_SUCCESS {
  type: UserConstants.GET_USERS_SUCCESS;
  payload: IUser[];
}

export interface GET_USERS_FAIL {
  type: UserConstants.GET_USERS_FAIL;
  payload: string;
}

export interface GET_USER_START {
  type: UserConstants.GET_USER_START;
}

export interface GET_USER_SUCCESS {
  type: UserConstants.GET_USER_SUCCESS;
  payload: IUser;
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
  payload: {};
}

export interface EDIT_USER_FAIL {
  type: UserConstants.EDIT_USER_FAIL;
  payload: string;
}

export interface DELETE_USER_START {
  type: UserConstants.DELETE_USER_START;
}

export interface DELETE_USER_SUCCESS {
  type: UserConstants.DELETE_USER_SUCCESS;
  payload: {};
}

export interface DELETE_USER_FAIL {
  type: UserConstants.DELETE_USER_FAIL;
  payload: string;
}

export type ActionTypes =
  | GET_USERS_START
  | GET_USERS_SUCCESS
  | GET_USERS_FAIL
  | GET_USER_START
  | GET_USER_SUCCESS
  | GET_USER_FAIL
  | EDIT_USER_START
  | EDIT_USER_SUCCESS
  | EDIT_USER_FAIL
  | DELETE_USER_START
  | DELETE_USER_SUCCESS
  | DELETE_USER_FAIL;
