import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



import { IDataServices } from 'src/core/abstracts/data-service.abstract';
import { PostGrayGenericRepository } from './graphql-generic-repository';
import { Course } from 'src/core';


@Injectable()
export class PostGrayDataServices
  implements IDataServices, OnApplicationBootstrap
{
  courses: PostGrayGenericRepository<Course>;

  constructor(
    @InjectRepository(Course)
    private CourseRepository: Repository<Course>,
  ) {}

  onApplicationBootstrap() {
    this.courses = new PostGrayGenericRepository<Course>(this.CourseRepository);
  }
}