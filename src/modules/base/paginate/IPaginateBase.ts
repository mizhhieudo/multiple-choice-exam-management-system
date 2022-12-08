export interface IPaginateParamsBase {
  pageSize?: number;
  orderBy?: string;
  sortBy?: string;
}

export interface IPaginateParams extends IPaginateParamsBase {
  page?: number;
}
