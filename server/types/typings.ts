import { Request, Response } from 'express';

export type ResponseHandler = (T: Request, P: Response) => void;

export interface ResponseError {
  data: any;
}