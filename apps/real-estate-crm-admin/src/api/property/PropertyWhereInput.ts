import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type PropertyWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  availabilityStatus?: "Option1";
  title?: StringNullableFilter;
  address?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  agent?: AgentWhereUniqueInput;
};
