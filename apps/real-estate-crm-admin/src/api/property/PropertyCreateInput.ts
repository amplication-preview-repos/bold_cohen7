import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type PropertyCreateInput = {
  description?: string | null;
  price?: number | null;
  availabilityStatus?: "Option1" | null;
  title?: string | null;
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  agent?: AgentWhereUniqueInput | null;
};
