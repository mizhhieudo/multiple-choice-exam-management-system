import { Model } from 'mongoose';
import { IListParams, resultPaging } from '../paginate/IPaginate';
import { SortQueries } from '../paginate/Paginte';
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

  async get(paginateParam?: IListParams) {
    try {
      const page: number = paginateParam?.page ? paginateParam?.page : 1;
      const pageSize: number = paginateParam?.pageSize
        ? paginateParam?.pageSize
        : 10;
      const skipDocument: number = (Number(page) - 1) * Number(pageSize);
      const data = await this._repository.find(
        { ...paginateParam?.options },
        null,
        {
          skip: skipDocument,
          limit: pageSize,
        },
      );
      const numberOfDocuments = await this._repository.count();
      const lastPage = Math.ceil(numberOfDocuments / pageSize);
      const nextPage = page + 1 > lastPage ? page : page + 1;
      const prevPage = page - 1 < 1 ? page : page - 1;
      return {
        docs: [...data],
        numberOfDocuments: numberOfDocuments,
        lastPage: lastPage,
        nextPage: nextPage,
        prevPage: prevPage,
        currentPage: page,
      };
    } catch (error) {
      return error;
    }
  }

  async create(item: T): Promise<T> {
    return await this._repository.create(item);
  }

  async update(id: string, item: T) {
    return await this._repository.findByIdAndUpdate(id, item);
  }

  async getById(id: string) {
    return await this._repository.findById(id);
  }

  async removeById(id: string) {
    return await this._repository.find({ _id: id }).remove().exec();
  }

  getModel() {
    return this._repository;
  }
}
