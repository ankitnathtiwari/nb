import { appConfig } from "../app-config";

export const initFun = {
  url: `${appConfig.url.api}/auth/logout`,
  method: "GET",
  loading: false,
  err: false,
};
