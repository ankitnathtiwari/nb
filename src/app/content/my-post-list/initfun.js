import { baseUrl, testUrl } from "../../base-url/index";

export const initFun = {
  deletePopUp: false,
  edit: false,
  query: "allpost",
  page: 1,
  path: `${baseUrl}/json_api/post/mypost`,
  method: "GET",
  loading: false,
  initLoading: true,
  err: false,
  message: "",
  posts: [],
  sendData: {},
};
