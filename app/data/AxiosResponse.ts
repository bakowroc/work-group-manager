import { AxiosResponse as AXResponse } from 'axios';

export interface AxiosResponse<T> extends AXResponse {
  data: T;
}
