import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

import { CourseUseCases } from 'src/use-cases/courses/course.use-case';
import { CourseDto, UpdateCourseDto } from 'src/core/dtos';
import { Course } from 'src/core/dtos/courseType';

@Resolver(() => Course)
export class CourseResolver {
  constructor(private courseUseCases: CourseUseCases) {}

  @Query(() => [Course])
  async getAll() {
    return this.courseUseCases.getAllCourses();
  }

  @Query(() => Course, { nullable: true })
  async getById(@Args('id', { type: () => String }) id: string) {
    return this.courseUseCases.getCourseById(id);
  }

  @Mutation(() => Course)
  createCourse(@Args('input') input: CourseDto) {
    return this.courseUseCases.createUser(input);
  }

  @Mutation(() => Course) //Update user
  async updateCourse(
    @Args('input') updateCourseInput: UpdateCourseDto,
  ): Promise<Course> {
    try {
      return this.courseUseCases.updateCourse(
        updateCourseInput.id,
        updateCourseInput,
      );
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      }
      throw new InternalServerErrorException('An unexpected error occurred');
    }
  }
}
