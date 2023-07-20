import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const options = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight, rehypeSlug],
  },
};

export default options;
