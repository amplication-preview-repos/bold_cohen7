import { Appointment } from "../appointment/Appointment";
import { Agent } from "../agent/Agent";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  price: number | null;
  availabilityStatus?: "Option1" | null;
  title: string | null;
  address: string | null;
  appointments?: Array<Appointment>;
  agent?: Agent | null;
};
