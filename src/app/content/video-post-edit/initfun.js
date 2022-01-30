import { appConfig } from "../../app-config";

const formItemsWithInit = (post) => {
  return {
    inputs: [{ id: "title", value: post.title, placeholder: "title" }],
    textarea: {
      id: "textarea",
      value: post.discription,
      placeholder: "Video Description here",
    },
    multiSelect: { id: "multiSelect", value: [] },
    image: { id: "image", value: "", labelName: "Upload Thumbnail" },
    video: { id: "video", value: "", labelName: "Upload Video" },
  };
};

export const initFun = (initState) => {
  console.log({ initState }, "init state of video edit");

  return {
    url: `${appConfig.url.api}/video/update`,
    post: initState.post,
    method: "PUT",
    loading: false,
    err: false,
    edited: false,
    message: "",
    formItems: formItemsWithInit(initState.post || {}),
    sendData: {},
  };
};
