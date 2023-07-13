import PostList from "./post-list";
import ButtonLink from "../shared/button-link";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const posts = [
  {
    title: "Tulisan Pertamaku",
    tags: ["#tech", "#website"],
    created_at: new Date().toLocaleDateString("en-EN", options),
  },
  {
    title: "Belajar ReactJS untuk Pemula tapi ga keren test judul panjang",
    tags: ["#tech", "#blog"],
    created_at: new Date().toLocaleDateString("en-EN", options),
  },
  {
    title: "Makan Bubur kok Diaduk",
    tags: ["#random", "#website"],
    created_at: new Date().toLocaleDateString("en-EN", options),
  },
  {
    title: "Taiwind Cool Stuff",
    tags: ["#tech", "#tailwind"],
    created_at: new Date().toLocaleDateString("en-EN", options),
  },
];

const PostSection = () => {
  return (
    <section className="py-16 mx-auto text-center lg:w-7/12">
      <p className="text-4xl text_gradient">Recent Posts</p>
      <PostList posts={posts} />
      {posts.length > 3 && (
        <ButtonLink
          href={"/posts"}
          className={"w-fit mx-auto px-20"}
        >
          More posts...
        </ButtonLink>
      )}
    </section>
  );
};
export default PostSection;
