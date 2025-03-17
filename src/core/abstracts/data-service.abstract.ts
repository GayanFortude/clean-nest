import { Course } from 'src/courses/entities/course';
import { IGenericRepository } from './generic-repository.abstract';


export abstract class IDataServices {
  abstract courses: IGenericRepository<Course>;
}
