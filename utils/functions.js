import { DATE_FORMAT } from "@/constants";

const dateFormatter = (strDate) => {
  return new Date(strDate).toLocaleDateString(
    DATE_FORMAT.locale,
    DATE_FORMAT.options
  );
};

export {dateFormatter};