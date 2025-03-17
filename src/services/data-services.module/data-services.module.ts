import { Module } from '@nestjs/common';
import { PostGrayDataServicesModule } from 'src/frameworks/graphql-data-services.module';

@Module({
  imports: [PostGrayDataServicesModule],
  exports: [PostGrayDataServicesModule],
})
export class DataServicesModule {}
