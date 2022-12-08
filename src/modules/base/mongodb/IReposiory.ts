import { IListParams } from '../paginate/IPaginate';

export interface IRepository<T> {
  getAll(): Promise<T[]>;

  get(paginateParam?: IListParams);

  create(item: T): Promise<T>;

  update(id: string, item: T);
}
