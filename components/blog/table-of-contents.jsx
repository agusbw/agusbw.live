import ScrollableLink from "../shared/scrollable-link";
import GithubSlugger from "github-slugger";

const TableOfContents = ({ headings }) => {
  return (
    <div className="sticky hidden text-left shrink-0 xl:block h-fit top-32">
      <p className="text-xl font-semibold text-highContrast after:block after:w-3/4 after:h-0.5  after:bg-highContrast">
        Table of Contents
      </p>
      <ul className="mt-2 text-sm list-disc list-inside">
        {headings.map((heading) => {
          return (
            <li
              key={heading.slug}
              data-level={heading.level}
              className="data-[level=three]:pl-5 "
            >
              <ScrollableLink
                href={`#${heading.slug}`}
                id={`${heading.slug}-link`}
                className={"hover:text-highContrast"}
              >
                {heading.text}
              </ScrollableLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TableOfContents;
