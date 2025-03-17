import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import * as crypto from 'crypto';
import { Course } from 'src/courses/entities/course';
import { PostGrayDataServices } from './graphql-data-services.service';
import { IDataServices } from 'src/core/abstracts/data-service.abstract';

const encryptedSecrets = {
  username: '20162041fe346d0d09b5a5d9e50d3daf',
  password: '8e9727d4411788f0c2b363d8e0b436d3',
  database: '20162041fe346d0d09b5a5d9e50d3daf',
};

// function decrypt(encrypted: string): string {
//   const decipher = crypto.createDecipheriv('aes-256-cbc', ENCRYPTION_KEY, IV);
//   let decrypted = decipher.update(encrypted, 'hex', 'utf8');
//   decrypted += decipher.final('utf8');
//   return decrypted;
// }

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: "postgres",
      password: "123",
      database: "postgres",
      entities: [Course],
      synchronize: true,
    }),
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
