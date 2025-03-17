import { Course } from '../entites';
import { IGenericRepository } from './generic-repository.abstract';


export abstract class IDataServices {
  abstract courses: IGenericRepository<Course>;
}
