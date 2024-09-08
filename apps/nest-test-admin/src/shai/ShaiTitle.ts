import { Shai as TShai } from "../api/shai/Shai";

export const SHAI_TITLE_FIELD = "id";

export const ShaiTitle = (record: TShai): string => {
  return record.id?.toString() || String(record.id);
};
