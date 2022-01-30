import { appConfig } from "../../app-config";

const formItemsWithInit = (post) => {
  return {
    inputs: [{ id: "title", value: post.title, placeholder: "title" }],
    textarea: {
      id: "textarea",
      value: post.content,
      placeholder: "type your content here",
    },
    select: { id: "select", value: "" },
    image: { id: "image", value: "" },
  };
};

export const initFun = (initState) => {
  return {
    url: `${appConfig.url.api}/post/update`,
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
