import Post from "../post/index";

const Posts = ({ posts, isPrivate }) => {
  return (
    <div className="Posts">
      {posts.map((item) => (
        <Post
          key={item._id}
          description={item.description}
          author={item.author.username}
          isPrivate={isPrivate}
          id={item._id}
        />
      ))}
    </div>
  );
};

export default Posts;
