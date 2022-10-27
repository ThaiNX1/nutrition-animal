export class DataResult<T> {
  data: T[] = [];
  count: number = 0;
  total: number = 0;
  page: number = 0;
  pageSize?: number = 0;
  pageCount: number = 0;
}

export interface UploadFile {
  id?: string;
  name?: string;
  status?: string;
  url?: string;
}
