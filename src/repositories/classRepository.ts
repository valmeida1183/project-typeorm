import { EntityRepository, Repository } from 'typeorm';
import Class from '../models/class';

@EntityRepository(Class)
export default class ClassRepository extends Repository<Class> {
  async findByName(name: string): Promise<Class[]> {
    try {
      return this.find({ where: { name } });
    } catch (error) {
      console.log('err.message', error.messasge);
      return [];
    }
  }
}
