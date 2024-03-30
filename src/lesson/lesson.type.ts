import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudentType } from '../student/student.type';

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

  @Field((_type) => [StudentType])
  students: string[];
}
