import { ShaiWhereInput } from "./ShaiWhereInput";
import { ShaiOrderByInput } from "./ShaiOrderByInput";

export type ShaiFindManyArgs = {
  where?: ShaiWhereInput;
  orderBy?: Array<ShaiOrderByInput>;
  skip?: number;
  take?: number;
};
