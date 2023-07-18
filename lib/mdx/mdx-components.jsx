import { AiOutlineLink } from "react-icons/ai";
import TOClink from "@/components/shared/toc-link";

const components = {
  h2: (props) => (
    <TOClink
      href={`#${props.id}`}
      className="prose w-fit"
      headingId={props.id}
    >
      <h2
        {...props}
        className="flex items-center gap-2 text-highContrast"
      >
        <AiOutlineLink className="text-lowContrast hover:text-highContrast" />
        {props.children}
      </h2>
    </TOClink>
  ),

  h3: (props) => (
    <TOClink
      href={`#${props.id}`}
      className="prose w-fit"
      headingId={props.id}
    >
      <h3
        {...props}
        className="flex items-center gap-2 text-highContrast"
      >
        <AiOutlineLink className="text-lowContrast hover:text-highContrast" />
        {props.children}
      </h3>
    </TOClink>
  ),
};

export default components;
