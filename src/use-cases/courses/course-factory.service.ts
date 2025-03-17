import { Injectable } from '@nestjs/common';
import { Course } from 'src/core';

import { CourseDto, UpdateCourseDto } from 'src/core/dtos/courseDto';

@Injectable()
export class CourseFactoryService {
  createNewCourse(createCourseDTO: CourseDto) {
    const newCourse = new Course();
    newCourse.code = createCourseDTO.code;
    newCourse.name = createCourseDTO.name;
    return newCourse;
  }

  updateCourse(UpdateCourseDto: UpdateCourseDto) {
    const newCourse = new Course();
    newCourse.code = UpdateCourseDto.code || '';
    newCourse.name = UpdateCourseDto.name || '';

    return newCourse;
  }
}
