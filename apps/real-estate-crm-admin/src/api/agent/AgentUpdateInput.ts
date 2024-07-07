import { AppointmentUpdateManyWithoutAgentsInput } from "./AppointmentUpdateManyWithoutAgentsInput";
import { PropertyUpdateManyWithoutAgentsInput } from "./PropertyUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  fullName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  appointments?: AppointmentUpdateManyWithoutAgentsInput;
  properties?: PropertyUpdateManyWithoutAgentsInput;
};
