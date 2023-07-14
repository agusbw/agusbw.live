import rehypeHighlight from "rehype-highlight/lib";

const options = {
    parseFrontmatter: true, mdxOptions: {
        rehypePlugins: [rehypeHighlight]
    }
}

export default options