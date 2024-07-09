import { useContext, useEffect, useReducer } from "react";
import OrigamiApi from "../../services/origamiApi/OrigamiApi";
import PostContext from "../postContext/PostContext";
import { USER_LOGIN, USER_LOGOUT } from "../types";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

const AuthState = (props) => {
  const initialState = {
    isLoggedIn: false,
    userData: {},
  };

  const postContext = useContext(PostContext);

  const [state, dispatch] = useReducer(AuthReducer, initialState, () => {
    const localState = localStorage.getItem("auth");
    return localState ? JSON.parse(localState) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(state));
  }, [state]);

  const loginUser = async (user) => {
    const response = await OrigamiApi.login(user);
    if (response.status === 200) {
      await postContext.getPrivatePosts();
      dispatch({
        type: USER_LOGIN,
        payload: response.data,
      });
    }
  };

  const logoutUser = async () => {
    const response = await OrigamiApi.logout();
    if (response.status === 200) {
      postContext.clearPrivatePosts();
      dispatch({
        type: USER_LOGOUT,
      });
    }
  };

  const registerUser = async (user) => {
    const response = await OrigamiApi.registerUser(user);
    if (response.status === 200) {
      await loginUser({ username: user.username, password: user.password });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        userData: state.userData,
        loginUser,
        logoutUser,
        registerUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
