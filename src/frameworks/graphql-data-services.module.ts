import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import * as crypto from 'crypto';

import { PostGrayDataServices } from './graphql-data-services.service';
import { IDataServices } from 'src/core/abstracts/data-service.abstract';
import { DATA_BASE_CONFIGURATION } from 'src/configeration';
import { Course } from 'src/core';


@Module({
  imports: [
    TypeOrmModule.forRoot(DATA_BASE_CONFIGURATION),
    TypeOrmModule.forFeature([Course]),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: PostGrayDataServices,
    },
  ],
  exports: [IDataServices],
})
export class PostGrayDataServicesModule {}
