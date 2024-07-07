/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsEnum,
  ValidateNested,
} from "class-validator";

import { EnumPropertyAvailabilityStatus } from "./EnumPropertyAvailabilityStatus";
import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { Type } from "class-transformer";
import { AgentWhereUniqueInput } from "../../agent/base/AgentWhereUniqueInput";

@InputType()
class PropertyCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumPropertyAvailabilityStatus,
  })
  @IsEnum(EnumPropertyAvailabilityStatus)
  @IsOptional()
  @Field(() => EnumPropertyAvailabilityStatus, {
    nullable: true,
  })
  availabilityStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: () => AppointmentCreateNestedManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => AppointmentCreateNestedManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => AppointmentCreateNestedManyWithoutPropertiesInput, {
    nullable: true,
  })
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
    type: () => AgentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AgentWhereUniqueInput)
  @IsOptional()
  @Field(() => AgentWhereUniqueInput, {
    nullable: true,
  })
  agent?: AgentWhereUniqueInput | null;
}

export { PropertyCreateInput as PropertyCreateInput };
