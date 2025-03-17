import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as crypto from 'crypto';
import { CourseModule } from './courses/course.module';
import { Course as CourseEntity } from './courses/entities/course';
import { DataServicesModule } from './services/data-services.module/data-services.module';
import { CourseUseCasesModule } from './use-cases/courses/course-usecase.module';
import { CourseResolver } from './resolvers/course.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PostGrayDataServicesModule } from './frameworks/graphql-data-services.module';

const encryptedSecrets = {
  username: '20162041fe346d0d09b5a5d9e50d3daf',
  password: '8e9727d4411788f0c2b363d8e0b436d3',
  database: '20162041fe346d0d09b5a5d9e50d3daf',
};

const ENCRYPTION_KEY = '123455431qwertgfdswertyuiopkmn12';
const IV = '1234567890123456';

function decrypt(encrypted: string): string {
  const decipher = crypto.createDecipheriv('aes-256-cbc', ENCRYPTION_KEY, IV);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

@Module({
  imports: [
    DataServicesModule,
    CourseUseCasesModule
    // CourseModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: decrypt(encryptedSecrets.username),
    //   password: decrypt(encryptedSecrets.password),
    //   database: decrypt(encryptedSecrets.database),
    //   entities: [CourseEntity],
    //   synchronize: true,
    // }),
  ],
   providers: [CourseResolver]
})
export class AppModule {}
