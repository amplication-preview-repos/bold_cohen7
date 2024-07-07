import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dateTime?: SortOrder;
  description?: SortOrder;
  agentId?: SortOrder;
  clientId?: SortOrder;
  propertyId?: SortOrder;
};
