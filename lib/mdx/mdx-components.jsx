import { AiOutlineLink } from "react-icons/ai";
import ScrollableLink from "@/components/shared/scrollable-link";

const components = {
  h2: (props) => (
    <ScrollableLink
      href={`#${props.id}`}
      id={`${props.id}-link`}
      className="prose w-fit"
    >
      <h2
        {...props}
        className="flex items-center gap-2 text-highContrast"
      >
        <AiOutlineLink className="text-lowContrast hover:text-highContrast" />
        {props.children}
      </h2>
    </ScrollableLink>
  ),

  h3: (props) => (
    <ScrollableLink
      href={`#${props.id}`}
      id={`${props.id}-link`}
      className="prose w-fit"
    >
      <h3
        {...props}
        className="flex items-center gap-2 text-highContrast"
      >
        <AiOutlineLink className="text-lowContrast hover:text-highContrast" />
        {props.children}
      </h3>
    </ScrollableLink>
  ),
};

export default components;
