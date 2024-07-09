import React, { useContext, useEffect } from "react";
import Posts from "../../components/posts/index";
import PostContext from "../../context/postContext/PostContext";

function Home() {
  const postContext = useContext(PostContext);
  const { publicPosts, getPublicPosts } = postContext;

  useEffect(() => {
    getPublicPosts();
  }, []);

  console.log(publicPosts);

  return (
    <div>
      <h1>Home Page</h1>
      {/* TODO: Render all posts here */}
      <Posts posts={publicPosts} />
    </div>
  );
}

export default Home;
