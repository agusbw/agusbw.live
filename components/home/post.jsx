import TextLink from "next/link";
import { twMerge } from "tailwind-merge";
import { dateFormatter } from "@/utils/functions";
import Badge from "../shared/badge";

const baseClass =
  "p-4 text-left transition-all border-2 hover:text-highContrast hover:scale-105 border-bdr";

const Post = ({ post, className }) => {
  return (
    <div className={twMerge(baseClass, className)}>
      <TextLink
        href={`/blog/${post.slug}`}
        className="text-xl hover:underline"
      >
        {post.title}
      </TextLink>
      <p className="mb-10 text-sm">{dateFormatter(post.created_at)}</p>
      <div className="flex flex-wrap items-end justify-end">
        {post.tags.map((tag, index) => {
          return (
            <Badge
              className={"mr-1"}
              key={index}
            >
              {tag}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};
export default Post;
