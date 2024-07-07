import { Appointment } from "../appointment/Appointment";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fullName: string | null;
  phoneNumber: string | null;
  email: string | null;
  appointments?: Array<Appointment>;
};
