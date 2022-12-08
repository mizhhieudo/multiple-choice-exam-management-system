import { QueryOptions } from 'mongoose';
import { IPaginateParams } from './IPaginateBase';

export interface IListParams {
  page?: number;
  pageSize?: number;
  options?: any;
}

export interface resultPaging {
  items: any;
  numberOfDocuments: number;
  lastPage: number;
  nextPage: number;
  prevPage: number;
  currentPage: number;
}
