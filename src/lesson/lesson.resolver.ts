import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './create-lesson.input';
import { StudentService } from '../student/student.service';

@Resolver((_of) => LessonType)
export class LessonResolver {
  constructor(
    private readonly lessonService: LessonService,
    private readonly studentService: StudentService,
  ) {}

  @Query((_returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Query((_returns) => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }

  @Mutation((_returns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ): Promise<Lesson> {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation((_returns) => LessonType)
  assignStudentToLesson(
    @Args('assignStudentsToLessonInput')
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ) {
    return this.lessonService.assignStudentsToLesson(
      assignStudentsToLessonInput,
    );
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    return this.studentService.getManyStudents(lesson.students);
  }
}
