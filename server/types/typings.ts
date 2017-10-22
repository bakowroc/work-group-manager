import { Request, Response } from 'express';

export type ResponseHandler = (T: Request, P: Response) => Promise<void>;

export interface ResponseError {
  data: any;
}

export interface PopulateQuery {
  path: string;
  select: string;
}
