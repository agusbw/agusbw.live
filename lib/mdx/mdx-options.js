import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";

const options = {
  parseFrontmatter: true,
  mdxOptions: {
    rehypePlugins: [rehypeHighlight, rehypeSlug],
  },
};

export default options;
