import { Injectable } from '@nestjs/common';
import { Course, IDataServices } from 'src/core';

import { CourseFactoryService } from './course-factory.service';
import { CourseDto, UpdateCourseDto } from 'src/core/dtos';
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
    const course = this.courseFactoryService.createNewCourse(createCourseDto);
    return this.dataServices.courses.create(course);
  }


  updateCourse(
    id: string,
    updateCourseDto: UpdateCourseDto,
  ): Promise<Course> {
    const course = this.courseFactoryService.updateCourse(updateCourseDto);
    return this.dataServices.courses.update(id, course);
  }
}
