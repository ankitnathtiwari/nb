import { baseUrl, testUrl } from "../../base-url/index";

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
    url: `${baseUrl}/json_api/post/update`,
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
