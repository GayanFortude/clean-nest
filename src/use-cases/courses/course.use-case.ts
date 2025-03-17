import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core';
import { Course } from 'src/courses/entities/course';
import { CourseFactoryService } from './course-factory.service';
import { CourseDto } from 'src/core/dtos';
@Injectable()
export class CourseUseCases {
  constructor(private dataServices: IDataServices,
    private courseFactoryService: CourseFactoryService
  ) {}

  getAllCourses(): Promise<Course[]> {
    return this.dataServices.courses.getAll();
  }

  getCourseById(id: any): Promise<Course> {
    return this.dataServices.courses.get(id);
  }

  createUser(createCourseDto: CourseDto): Promise<Course> {
    const author = this.courseFactoryService.createNewAuthor(createCourseDto);
    return this.dataServices.courses.create(author);
  }
}
