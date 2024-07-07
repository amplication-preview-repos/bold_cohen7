import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type PropertyUpdateInput = {
  description?: string | null;
  price?: number | null;
  availabilityStatus?: "Option1" | null;
  title?: string | null;
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  agent?: AgentWhereUniqueInput | null;
};
