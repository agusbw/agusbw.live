import TextLink from "next/link";
import { twMerge } from "tailwind-merge";

const baseClass =
  "relative p-4 text-left transition-all border-2 hover:text-highContrast hover:scale-105 border-bdr";

const Post = ({ post, className }) => {
  return (
    <div className={twMerge(baseClass, className)}>
      <TextLink
        href={"#"}
        className="text-xl hover:underline"
      >
        {post.title}
      </TextLink>
      <p className="mb-10 text-sm">{post.created_at}</p>
      <div className="absolute bottom-0 right-0 flex gap-1 pb-4 pr-4">
        {post.tags.map((tag, index) => {
          return (
            <div
              key={index}
              className="py-0.5 px-3 rounded-full border flex justify-center items-center border-bdr"
            >
              <span className="text-sm">{`${tag}`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Post;
