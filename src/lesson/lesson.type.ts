import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Lesson')
export class LessonType {
  @Field((_type) => ID)
  id: string;

  @Field((_type) => String)
  name: string;

  @Field((_type) => String)
  startDate: string;

  @Field((_type) => String)
  endDate: string;
}
