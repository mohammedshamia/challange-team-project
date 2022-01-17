import { AuthConstants } from "../contants/auth.constants";
import { ActionsType, IAuth } from "../../@types/auth.types";

const initial_state: IAuth = {
  loading: false,
  error: "",
  user: {},
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
        user: action.payload,
      };
    case AuthConstants.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
