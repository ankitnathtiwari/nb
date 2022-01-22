import { baseUrl, testUrl } from "../../base-url/index";

const formItems = {
  inputs: [{ id: "title", value: "", placeholder: "title" }],
  textarea: {
    id: "textarea",
    value: "",
    placeholder: "type your content here",
  },
  select: { id: "select", value: "select options" },
  image: { id: "image", value: "", labelName: "Upload Image" },
};

export const initFun = {
  url: `${baseUrl}/json_api/post/create`,
  method: "POST",
  loading: false,
  err: false,
  message: "",
  edited: false,
  formItems: formItems,
  sendData: {},
};
