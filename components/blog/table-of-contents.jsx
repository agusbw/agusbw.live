import TOClink from "../shared/toc-link";
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
              <TOClink
                href={`#${heading.slug}`}
                headingId={heading.slug}
                className={"hover:text-highContrast"}
              >
                {heading.text}
              </TOClink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TableOfContents;
