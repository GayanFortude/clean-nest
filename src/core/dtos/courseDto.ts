import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CourseDto {
  @Field()
  name: string;
  @Field()
  code: string;
}
