import { AiOutlineLink } from "react-icons/ai";
import MarkdownHeaderLink from "@/components/shared/markdown-header-link";

const components = {
  h2: (props) => (
    <MarkdownHeaderLink headingId={props.id}>
      <div className="flex items-center gap-2">
        <AiOutlineLink className="text-2xl text-lowContrast hover:text-highContrast" />
        <h2 {...props} />
      </div>
    </MarkdownHeaderLink>
  ),
  h3: (props) => (
    <MarkdownHeaderLink headingId={props.id}>
      <div className="flex items-center gap-2">
        <AiOutlineLink className="text-xl text-lowContrast hover:text-highContrast" />
        <h3 {...props} />
      </div>
    </MarkdownHeaderLink>
  ),
};

export default components;
