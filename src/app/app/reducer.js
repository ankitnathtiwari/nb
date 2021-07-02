import { fetchCompleted } from "./eventHandlers";
import { handleLogin, handleLogout, handleErr } from "./eventHandlers";

export const reducer = (state, action) => {
  switch (action.type) {
    case "showSidebar":
      return { ...state, sideNav: true };
    case "fetchCompleted":
      return fetchCompleted(state, action);
    case "hideSidebar":
      return { ...state, sideNav: false };
    case "LOGGED_IN":
      return handleLogin(state, action);
    case "LOGGED_OUT":
      return handleLogout(state, action);
    case "err":
      return handleErr(state, action);

    default:
      throw new Error();
  }
};
