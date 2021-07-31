import { baseUrl, testUrl } from "../../base-url/index";

export const initFun = {
  query: "all",
  page: 1,
  path: `${baseUrl}/json_api/post/allpost`,
  method: "GET",
  loading: false,
  initLoading: true,
  err: false,
  message: "",
  posts: [],
};
