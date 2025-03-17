import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  code: string;
}
