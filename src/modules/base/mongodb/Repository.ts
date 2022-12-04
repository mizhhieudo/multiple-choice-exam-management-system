import { Model } from 'mongoose';
import { IRepository } from './IReposiory';

export class Repository<T extends Document> implements IRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  async getAll(): Promise<T[]> {
    return await this._repository.find().populate(this._populateOnFind).exec();
  }

  async get(id: any): Promise<T> {
    const record = await this._repository.findById(id);

    if (record && this._populateOnFind.length) {
      for (const path of this._populateOnFind) {
        await record.populate(path);
      }
    }
    return record;
  }

  async create(item: T): Promise<T> {
    return await this._repository.create(item);
  }

  async update(id: string, item: T) {
    return await this._repository.findByIdAndUpdate(id, item);
  }

  getModel() {
    return this._repository;
  }
}
