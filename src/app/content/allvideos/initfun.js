import { appConfig } from "../../app-config";

export const initFun = {
  query: "allpost",
  page: 1,
  path: `${appConfig.url.api}/video/allvideo`,
  method: "GET",
  loading: false,
  initLoading: true,
  err: false,
  message: "",
  videoPosts: [],
};
