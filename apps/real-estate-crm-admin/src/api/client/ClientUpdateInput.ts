import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  fullName?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
};
