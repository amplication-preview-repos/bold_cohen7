import { Appointment } from "../appointment/Appointment";
import { Property } from "../property/Property";

export type Agent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fullName: string | null;
  email: string | null;
  phoneNumber: string | null;
  appointments?: Array<Appointment>;
  properties?: Array<Property>;
};
