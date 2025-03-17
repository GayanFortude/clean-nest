import { Injectable } from '@nestjs/common';
import { Course } from 'src/courses/entities/course';
import { CourseDto } from 'src/core/dtos/courseDto';

@Injectable()
export class CourseFactoryService {
  createNewAuthor(createCourseDTO: CourseDto) {
    const newCourse = new Course();
    newCourse.code = createCourseDTO.code;
    newCourse.name = createCourseDTO.name;
    return newCourse;
  }

//   updateAuthor(updateAuthorDto: UpdateAuthorDto) {
//     const newAuthor = new Author();
//     newAuthor.firstName = updateAuthorDto.firstName;
//     newAuthor.lastName = updateAuthorDto.lastName;

//     return newAuthor;
//   }
}
