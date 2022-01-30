import { appConfig } from "../app-config";

export const initFun = {
  url: `${appConfig.url.api}/auth`,
  method: "GET",
  sideNav: false,
  loading: false,
  initLoading: true,
  err: false,
  message: "",
  auth: false,
  user: "",
  sendData: {},
};
