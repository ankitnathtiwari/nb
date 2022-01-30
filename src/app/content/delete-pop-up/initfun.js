export const initFun = (initData) => {
  return {
    post: initData.post,
    url: initData.deleteUrl || "",
    sendData: {},
    message: "",
    loading: false,
    err: false,
  };
};
