import { baseUrl, testUrl } from "../base-url";

export const initFun = {
  url: `${baseUrl}/json_api/auth`,
  method: "GET",
  sideNav: false,
  loading: false,
  initLoading: false,
  err: true,
  message: "",
  auth: false,
  user: "",
  sendData: {},
};
