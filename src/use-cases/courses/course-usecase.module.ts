import { Module } from '@nestjs/common';
import { CourseFactoryService } from './course-factory.service';
import { CourseUseCases } from './course.use-case';
import { DataServicesModule } from 'src/services/data-services.module/data-services.module';

@Module({
  imports: [DataServicesModule],
  providers: [CourseFactoryService, CourseUseCases],
  exports: [CourseFactoryService, CourseUseCases],
})
export class CourseUseCasesModule {}