import Post from "./post";

const PostList = ({ posts }) => {
  posts = posts.slice(0, 3);
  return (
    <div className="flex justify-center w-11/12 gap-8 px-5 py-8 mx-auto overflow-auto lg:py-4 lg:w-full">
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.title}
            post={post}
            className="flex-1 min-h-[132px] min-w-[320px] lg:min-w-[250px] max-w-[400px]"
          />
        ))
      ) : (
        <p className="mx-auto text-3xl text-center">
          Post is not available yet!
        </p>
      )}
    </div>
  );
};
export default PostList;
