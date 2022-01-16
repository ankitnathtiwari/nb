export const fetchCompleted = (state, action) => {
  console.log("fetch completed allpost");
  return {
    ...state,
    loading: false,
    initLoading: false,
    videoPosts: [...state.videoPosts, ...action.payload],
  };
};
export const handleLoadMore = (state, action) => {
  return {
    ...state,
    page: state.page + 1,
    loading: true,
  };
};
