import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveReference,
} from '@nestjs/graphql';
import {
  BadRequestException,
  Body,
  Get,
  InternalServerErrorException,
  Param,
  Post,
} from '@nestjs/common';
import { Course } from 'src/courses/type/courseType';
import { CourseUseCases } from 'src/use-cases/courses/course.use-case';

@Resolver(() => Course)
export class CourseResolver {
  constructor(private courseUseCases: CourseUseCases) {}

  @Query(() => [Course])
  async getAll() {
    return this.courseUseCases.getAllCourses();
  }

  @Query(() => Course, { nullable: true })
  async getById(@Args('id', { type: () => String }) id: string,) {
    return this.courseUseCases.getCourseById(id);
  }

  @Mutation(() => Course)
  createCourse(@Args('input') input: CourseDto) {
    return this.courseUseCases.createUser(input);
  }
}
