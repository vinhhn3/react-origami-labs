import {
  CLEAR_PRIVATE_POSTS,
  GET_ALL_POSTS,
  GET_PRIVATE_POSTS,
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        publicPosts: action.payload,
      };
    case GET_PRIVATE_POSTS:
      return {
        ...state,
        privatePosts: action.payload,
      };
    case CLEAR_PRIVATE_POSTS:
      return {
        ...state,
        privatePosts: [],
      };
    default:
      return state;
  }
};
