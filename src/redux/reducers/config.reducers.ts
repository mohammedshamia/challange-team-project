import { ActionsType, IConfig } from "../../@types/config.types";
import { configConstants } from "../contants/config.constants";

export interface IState {
  error: string;
  loading: boolean;
  config: IConfig;
}

const initial_state: IState = {
  loading: false,
  error: "",
  config: {},
};

export const configReducer = (
  state: IState = initial_state,
  action: ActionsType
) => {
  switch (action.type) {
    case configConstants.GET_CONFIG_START:
      return {
        ...state,
        loading: true,
      };
    case configConstants.GET_CONFIG_SUCCESS:
      return {
        ...state,
        loading: false,
        config: {
          ...state.config,
          ...action.payload,
        },
      };
    case configConstants.GET_CONFIG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
