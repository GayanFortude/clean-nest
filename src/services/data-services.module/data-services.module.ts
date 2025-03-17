import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PostGrayDataServicesModule } from 'src/frameworks/graphql-data-services.module';

@Module({
  imports: [PostGrayDataServicesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
  ],
  exports: [PostGrayDataServicesModule],
})
export class DataServicesModule {}
