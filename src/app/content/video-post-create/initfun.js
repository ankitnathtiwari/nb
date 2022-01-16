import { baseUrl, testUrl } from "../../base-url/index";

const formItems = {
  inputs: [{ id: "title", value: "", placeholder: "title" }],
  textarea: {
    id: "textarea",
    value: "",
    placeholder: "Video Description here",
  },
  multiSelect: { id: "multiSelect", value: [] },
  image: { id: "image", value: "", labelName: "Upload Thumbnail" },
  video: { id: "video", value: "", labelName: "Upload Video" },
};

export const initFun = {
  url: `${baseUrl}/json_api/video/create`,
  method: "POST",
  loading: false,
  err: false,
  message: "",
  edited: false,
  formItems: formItems,
  sendData: {},
};
