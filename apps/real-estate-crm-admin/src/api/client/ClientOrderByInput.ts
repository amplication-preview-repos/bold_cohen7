import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fullName?: SortOrder;
  phoneNumber?: SortOrder;
  email?: SortOrder;
};
