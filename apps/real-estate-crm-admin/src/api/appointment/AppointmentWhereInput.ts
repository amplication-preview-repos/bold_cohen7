import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentWhereInput = {
  id?: StringFilter;
  dateTime?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  agent?: AgentWhereUniqueInput;
  client?: ClientWhereUniqueInput;
  property?: PropertyWhereUniqueInput;
};
