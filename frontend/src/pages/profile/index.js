import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Posts from "../../components/posts/index";
import AuthContext from "../../context/authContext/AuthContext";
import PostContext from "../../context/postContext/PostContext";

function Profile() {
  const postContext = useContext(PostContext);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const { privatePosts } = postContext;
  const { userData, logoutUser } = authContext;

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <p>Username: {userData.username}</p>
        <p>Number of posts: {privatePosts.length}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div>
        <h3>Last 3 posts from your wall</h3>
        <Posts isPrivate={true} posts={privatePosts.slice(-3).reverse()} />
      </div>
    </div>
  );
}

export default Profile;
