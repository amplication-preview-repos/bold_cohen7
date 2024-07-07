import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
  availabilityStatus?: SortOrder;
  title?: SortOrder;
  address?: SortOrder;
  agentId?: SortOrder;
};
