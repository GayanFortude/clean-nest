import { Field, ID, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class CourseDto {
  @Field()
  name: string;
  @Field()
  code: string;
}


@InputType()
export class UpdateCourseDto extends PartialType(CourseDto) {
  @Field(() => ID)
  id: string;
}

