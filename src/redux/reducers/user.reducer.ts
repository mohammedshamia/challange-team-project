import { IUser } from "../../@types/users.types";
import { UserConstants } from "../contants/user.constant";
import { ActionTypes } from "../../@types/users.types";

interface IState {
  loading: boolean;
  error: string;
  user: IUser | undefined;
  users: {
    page: number;
    pages: number;
    users: IUser[];
  };
  allUsers: IUser[];
}

const initial_state: IState = {
  loading: false,
  error: "",
  user: undefined,
  users: {
    page: 0,
    pages: 0,
    users: [],
  },
  allUsers: [],
};

export const UsersReducer = (state = initial_state, action: ActionTypes) => {
  switch (action.type) {
    case UserConstants.GET_USERS_START:
      return {
        ...state,
        loading: true,
      };
    case UserConstants.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case UserConstants.GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserConstants.GET_ALL_USERS_START:
      return {
        ...state,
        loading: true,
      };
    case UserConstants.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        allUsers: action.payload,
      };
    case UserConstants.GET_ALL_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserConstants.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case UserConstants.GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserConstants.EDIT_USER_START:
      return {
        ...state,
        loading: true,
      };
    case UserConstants.EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case UserConstants.EDIT_USER_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
