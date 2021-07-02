import { baseUrl, testUrl } from "../../base-url/index";

export const initFun = (initData) => {
  return {
    post: initData.post,
    url: `${baseUrl}/json_api/post/delete`,
    sendData: {},
    message: "",
    loading: false,
    err: false,
  };
};
