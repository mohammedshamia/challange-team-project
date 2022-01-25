import { IUser } from "../../@types/users.types";
import { UserConstants } from "../contants/user.constant";
import { ActionTypes } from "../../@types/users.types";

interface IState {
  loading: boolean;
  error: string;
  users: {
    page: number;
    pages: number;
    users: IUser[];
  };
  user: IUser | null;
}

const initial_state: IState = {
  loading: false,
  error: "",
  users: {
    page: 0,
    pages: 0,
    users: [],
  },
  user: null,
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
