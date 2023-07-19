import TOClink from "../shared/toc-link";

const TableOfContents = ({ headings }) => {
  return (
    <div className="sticky hidden text-left shrink-0 xl:block h-fit top-32">
      <p className="text-xl font-semibold text-highContrast after:block after:w-3/4 after:h-0.5  after:bg-highContrast ">
        Table of Contents
      </p>
      <ul className="mt-2 text-sm">
        {headings.map((heading) => {
          return (
            <li
              key={heading.slug}
              className="mb-1"
            >
              <TOClink
                headingId={`${heading.slug}`}
                data-level={heading.level}
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
