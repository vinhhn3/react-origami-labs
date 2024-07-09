import React, { useContext } from "react";
import PostContext from "../../context/postContext/PostContext";

const Post = ({ description, author, isPrivate, id }) => {
  const postContext = useContext(PostContext);
  const { deletePost, getPrivatePosts } = postContext;

  const handleDelete = async () => {
    console.log("Delete post with id", id);
    await deletePost(id);
    await getPrivatePosts();
  };

  return (
    <div className="Post">
      <p className="description">{description}</p>
      <div>
        {isPrivate && (
          <button onClick={handleDelete} style={{ backgroundColor: "red" }}>
            Delete
          </button>
        )}
      </div>
      <div>
        <span>
          <small>Author:</small>
          {author}
        </span>
      </div>
    </div>
  );
};

export default Post;
