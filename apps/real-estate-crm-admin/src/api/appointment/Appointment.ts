import { Agent } from "../agent/Agent";
import { Client } from "../client/Client";
import { Property } from "../property/Property";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dateTime: Date | null;
  description: string | null;
  agent?: Agent | null;
  client?: Client | null;
  property?: Property | null;
};
