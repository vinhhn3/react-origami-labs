import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:9999/api",
  withCredentials: true,
});

const getAllPosts = (limit) => {
  return axiosClient.get(`/origami/all?limit=${limit}`);
};

const registerUser = (user) => {
  return axiosClient.post("/user/register", user);
};

const login = (user) => {
  return axiosClient.post("/user/login", user);
};

const logout = () => {
  return axiosClient.post("/user/logout");
};

const getMyPosts = () => {
  return axiosClient.get("/origami/mine");
};

const createPost = (text) => {
  return axiosClient.post("/origami", { description: text });
};

const deletePost = (id) => {
  return axiosClient.delete(`/origami/${id}`);
};

const OrigamiApi = {
  getAllPosts,
  registerUser,
  login,
  logout,
  getMyPosts,
  createPost,
  deletePost,
};

export default OrigamiApi;
