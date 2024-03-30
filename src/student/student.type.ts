import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType {
  @Field((_type) => ID)
  id: string;

  @Field((_type) => String)
  firstName: string;

  @Field((_type) => String)
  lastName: string;
}
