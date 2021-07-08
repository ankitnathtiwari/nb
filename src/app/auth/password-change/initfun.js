import { baseUrl, testUrl } from "../../base-url/index";

export const formItems = {
  inputs: [
    { id: "newPassword", value: "", placeholder: "New Password" },
    {
      id: "confirmNewPassword",
      value: "",
      placeholder: "Confirm New Password",
    },
  ],
};

export const initFun = {
  initData: {},
  url: `${baseUrl}/json_api/auth/password_change`,
  method: "POST",
  sendData: {},
  initRender: false,
  message: "",
  formItems: formItems,
  loading: false,
  err: false,
};
