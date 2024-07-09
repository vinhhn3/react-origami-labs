import { USER_LOGIN, USER_LOGOUT } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        userData: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userData: {},
      };
    default:
      return state;
  }
};
