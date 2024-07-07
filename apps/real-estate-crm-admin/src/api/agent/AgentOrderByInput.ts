import { SortOrder } from "../../util/SortOrder";

export type AgentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fullName?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
};
