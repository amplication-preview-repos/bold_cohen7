import { AppointmentCreateNestedManyWithoutAgentsInput } from "./AppointmentCreateNestedManyWithoutAgentsInput";
import { PropertyCreateNestedManyWithoutAgentsInput } from "./PropertyCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  fullName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutAgentsInput;
  properties?: PropertyCreateNestedManyWithoutAgentsInput;
};
