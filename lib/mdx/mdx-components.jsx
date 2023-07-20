import { AiOutlineLink } from "react-icons/ai";
import MarkdownHeaderLink from "@/components/shared/markdown-header-link";

const components = {
  h2: (props) => (
    <MarkdownHeaderLink headingId={props.id}>
      <div className="flex items-center gap-2">
        <AiOutlineLink className="mt-3 mb-1 text-3xl text-lowContrast hover:text-highContrast" />
        <h2 {...props} />
      </div>
    </MarkdownHeaderLink>
  ),
  h3: (props) => (
    <MarkdownHeaderLink headingId={props.id}>
      <div className="flex items-center gap-2">
        <AiOutlineLink className="mt-3 mb-1 text-2xl text-lowContrast hover:text-highContrast" />
        <h3 {...props} />
      </div>
    </MarkdownHeaderLink>
  ),
  h4: (props) => (
    <MarkdownHeaderLink headingId={props.id}>
      <div className="flex items-center gap-2">
        <AiOutlineLink className="mt-3 mb-1 text-xl text-lowContrast hover:text-highContrast" />
        <h4 {...props} />
      </div>
    </MarkdownHeaderLink>
  ),
  code: (props) => {
    if (!props.className) {
      return (
        <code
          style={{
            backgroundColor: "#343941",
            color: "#DCDCDC",
            padding: "4px",
            fontFamily: "Inter",
            fontWeight: "initial",
            fontSize: "0.9rem",
            borderRadius: "5px",
          }}
          className="inline-code"
        >
          {props.children}
        </code>
      );
    }
    return <code {...props} />;
  },
};

export default components;
