import { baseUrl, testUrl } from "../../base-url/index";

export const initFun = {
  query: "allpost",
  page: 1,
  path: `${baseUrl}/json_api/video/allvideo`,
  method: "GET",
  loading: false,
  initLoading: true,
  err: false,
  message: "",
  videoPosts: [],
};
