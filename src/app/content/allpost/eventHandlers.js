export const deletePost = (state, action) => {
  return {
    ...state,
    posts: state.posts.filter((item) => {
      return item.id !== action.payload;
    }),
  };
};

export const updatePost = (state, action) => {
  return {
    ...state,
    posts: state.posts.map((item) => {
      if (item.id === action.payload.id) {
        item.title = action.payload.title;
        item.body = action.payload.content;
        return item;
      }
      return item;
    }),
  };
};
export const deletePopUpNo = (state, action) => {
  return {
    ...state,
    deletePopUp: false,
    edit: false,
  };
};
export const editHandler = (state, action) => {
  return {
    ...state,
    deletePopUp: false,
    edit: true,
  };
};
export const fetchCompleted = (state, action) => {
  console.log("fetch completed allpost");
  return {
    ...state,
    loading: false,
    initLoading: false,
    posts: action.payload,
  };
};
