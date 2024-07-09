import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Posts from "../../components/posts/index";
import AuthContext from "../../context/authContext/AuthContext";
import PostContext from "../../context/postContext/PostContext";

function CreatePost() {
  const [text, setText] = useState("");
  const postContext = useContext(PostContext);
  const authContext = useContext(AuthContext);
  const { logoutUser } = authContext;
  const { submitPost, privatePosts } = postContext;
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    console.log(text);
    submitPost(text);
  };

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  return (
    <div>
      <h1>Share Your Thoughts</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="What's on your mind?"
      />
      <button onClick={handleSubmit}>Share</button>
      <button onClick={handleLogout}>Logout</button>

      <div>
        <h3>Last 3 posts on your wall</h3>
        <Posts posts={privatePosts.slice(-3).reverse()} />
      </div>
    </div>
  );
}

export default CreatePost;
