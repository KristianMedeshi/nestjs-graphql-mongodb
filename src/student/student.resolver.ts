import { StudentService } from './student.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { CreateStudentInput } from './create-student.input';

@Resolver((_of) => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query((_returns) => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  @Query((_returns) => [StudentType])
  students() {
    return this.studentService.getStudents();
  }

  @Mutation((_returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<StudentType> {
    return this.studentService.createStudent(createStudentInput);
  }
}
