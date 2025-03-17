import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostGrayDataServices } from './graphql-data-services.service';
import { IDataServices } from 'src/core/abstracts/data-service.abstract';
import { DATA_BASE_CONFIGURATION } from 'src/configeration';
import { Course } from 'src/core';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
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
