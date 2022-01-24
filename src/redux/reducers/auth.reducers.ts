import { AuthConstants } from "../contants/auth.constants";
import { ActionsType, IAuth, IUser } from "../../@types/auth.types";

const user: string = localStorage.getItem("user-data") || "";

const initial_state: IAuth = {
  loading: false,
  error: "",
  isAuthenticated: Boolean(user) || false,
  user:
    (user && (JSON.parse(user) as IUser)) ||
    ({
      _id: "",
      firstName: "",
      lastName: "",
      email: "",
      isAdmin: false,
      token: "",
      dateOfBirth: "",
      profileImage: "",
    } as IUser),
};

export const AuthReducer = (state = initial_state, action: ActionsType) => {
  switch (action.type) {
    case AuthConstants.CREATE_USER_START:
      return {
        ...state,
        loading: true,
      };
    case AuthConstants.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case AuthConstants.CREATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AuthConstants.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case AuthConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case AuthConstants.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AuthConstants.LOG_OUT:
      return {
        loading: false,
        error: "",
        isAuthenticated: false,
        user: {
          _id: "",
          firstName: "",
          lastName: "",
          email: "",
          isAdmin: false,
          token: "",
          dateOfBirth: "",
          profileImage: "",
        },
      };
    default:
      return state;
  }
};
