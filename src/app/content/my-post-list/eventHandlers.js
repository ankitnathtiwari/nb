export const deletePost = (state, action) => {
  return {
    ...state,
    posts: state.posts.filter((item) => item._id !== action.payload),
    loading: false,
    initloading: false,
  };
};

export const updatePost = (state, action) => {
  return {
    ...state,
    loading: false,
    initloading: false,
    posts: state.posts.map((item) => {
      if (item._id === action.payload._id) {
        item = action.payload;
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
    loading: false,
    initloading: false,
  };
};
export const editHandler = (state, action) => {
  return {
    ...state,
    deletePopUp: false,
    edit: true,
    loading: false,
    initloading: false,
  };
};
export const fetchCompleted = (state, action) => {
  return {
    ...state,
    loading: false,
    initLoading: false,
    posts: [...state.posts, ...action.payload],
  };
};
export const handleLoadMore = (state, action) => {
  return {
    ...state,
    page: state.page + 1,
    loading: true,
  };
};
