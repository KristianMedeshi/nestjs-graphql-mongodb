import { CreateStudentInput } from './create-student.input';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  getStudent(id: string): Promise<Student> {
    return this.studentRepository.findOneBy({ id });
  }

  getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  createStudent(createStudentInput: CreateStudentInput) {
    const { firstName, lastName } = createStudentInput;
    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });
    return this.studentRepository.save(student);
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    console.log(studentIds);
    return this.studentRepository.find({
      where: {
        id: { $in: studentIds } as any,
      },
    });
  }
}
