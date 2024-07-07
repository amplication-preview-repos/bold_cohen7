import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  fullName?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
};
