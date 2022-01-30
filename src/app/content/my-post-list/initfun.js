import { appConfig } from "../../app-config";

export const initFun = {
  deletePopUp: false,
  edit: false,
  query: "allpost",
  page: 1,
  path: `${appConfig.url.api}/post/mypost`,
  method: "GET",
  loading: false,
  initLoading: true,
  err: false,
  message: "",
  posts: [],
  sendData: {},
};
