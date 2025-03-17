import { Module } from '@nestjs/common';
import { DataServicesModule } from './services/data-services.module/data-services.module';
import { CourseUseCasesModule } from './use-cases/courses/course-usecase.module';
import { CourseResolver } from './resolvers/course.resolver';



@Module({
  imports: [
    DataServicesModule,
    CourseUseCasesModule
  ],
   providers: [CourseResolver]
})
export class AppModule {}
