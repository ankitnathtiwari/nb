import { baseUrl, testUrl } from "../../base-url/index";

export const initFun = {
  method: "POST",
  loading: false,
  err: false,
  message: "",
  initData: {},
  sendData: {},
  formItems: inputFormItems(placeholders),
};
