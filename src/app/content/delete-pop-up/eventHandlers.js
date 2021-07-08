export const deleteYes = (state, action) => {
  //  "loading and data to be sent"

  return {
    ...state,
    loading: true,
    sendData: {
      id: state.post._id,
    },
  };
};

export const deleteNo = (state, action) => {
  //  "loading and data to be sent"
  state.toggleDelete;
  return {
    ...state,
    sendData: {
      post_id: "1234",
    },
  };
};

export const fetchCompleted = (state, action) => {
  //set loading :false, initData:fetch data, message:successfully fetched
  return {
    ...state,
    initData: action.payload,
    loading: false,
    message: "Post Deleted",
  };
};
