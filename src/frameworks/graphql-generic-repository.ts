import { IGenericRepository } from 'src/core/abstracts/generic-repository.abstract';
import { Repository, ObjectLiteral } from 'typeorm';


export class PostGrayGenericRepository<T extends ObjectLiteral> implements IGenericRepository<T> {
  constructor(private repository: Repository<T>) {}

  async getAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async get(id: string): Promise<T> {
    const entity = await this.repository.findOneBy({ id } as any);
    if (!entity) {
      throw new Error('Entity not found');
    }
    return entity;
  }

  async create(item: T): Promise<T> {
    return await this.repository.save(item);
  }

  async update(id: string, item: Partial<T>): Promise<void> {
    await this.repository.update(id, item);
  }
}
