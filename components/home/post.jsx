import TextLink from "next/link";
import { twMerge } from "tailwind-merge";
import { getTagArray } from "@/utils/function";
import { DATE_FORMAT } from "@/constants";
import Badge from "../shared/badge";

const baseClass =
  "p-4 text-left transition-all border-2 hover:text-highContrast hover:scale-105 border-bdr";

const Post = ({ post, className }) => {
  const tags = getTagArray(post.tags);

  return (
    <div className={twMerge(baseClass, className)}>
      <TextLink
        href={`/blog/${post.slug}`}
        className="text-xl hover:underline"
      >
        {post.title}
      </TextLink>
      <p className="mb-10 text-sm">
        {new Date(post.created_at).toLocaleDateString(
          DATE_FORMAT.locale,
          DATE_FORMAT.options
        )}
      </p>
      <div className="flex flex-wrap items-end justify-end">
        {tags.map((tag, index) => {
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
