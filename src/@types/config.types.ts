import { configConstants } from "../redux/contants/config.constants";

export interface IConfig {
  [key: string]: any;
}

export interface GET_CONFIG_START {
  type: configConstants.GET_CONFIG_START;
}

export interface GET_CONFIG_SUCCESS {
  type: configConstants.GET_CONFIG_SUCCESS;
  payload: IConfig;
}

export interface GET_CONFIG_FAIL {
  type: configConstants.GET_CONFIG_FAIL;
  payload: string;
}

export type ActionsType =
  | GET_CONFIG_START
  | GET_CONFIG_SUCCESS
  | GET_CONFIG_FAIL;
