import React, { useContext, useState } from "react";
import Posts from "../../components/posts/index";
import PostContext from "../../context/postContext/PostContext";

function CreatePost() {
  const [text, setText] = useState("");
  const postContext = useContext(PostContext);
  const { submitPost, privatePosts } = postContext;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    try {
      submitPost(text);
    } catch (error) {
      alert("Create post error");
    }
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

      <div>
        <h3>Last 3 posts on your wall</h3>
        <Posts posts={privatePosts.slice(-3).reverse()} />
      </div>
    </div>
  );
}

export default CreatePost;
