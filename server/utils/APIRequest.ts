import {Request, Response} from 'express';
import { Model } from 'mongoose';

import { ResponseError, ResponseHandler } from '../types/typings';

class APIRequest {

  public GET_MANY = <T>(DataModel: Model<any>): ResponseHandler =>
    (request: Request, response: Response): void => {
      DataModel.find({})
        .then((data: Array<T>) => this.JSONResponse(response, data))
        .catch((error: ResponseError) => this.JSONResponse(response, error));
    }

  public GET_SINGLE = <T>(DataModel: Model<any>): ResponseHandler => 
    (request: Request, response: Response): void => {
      const slug: number = request.params.slug;
      DataModel.findOne({slug})
        .then((data: T) => this.JSONResponse(response, data))
        .catch((error: ResponseError) => this.JSONResponse(response, error));
    }

  public POST = <T>(DataModel: Model<any>, getBodyByRules?: (body: T) => T): ResponseHandler => 
    (request: Request, response: Response): void => {
      const DataModelBody = arguments.length === 2 ? getBodyByRules(request.body) : request.body;
      new DataModel(DataModelBody).save()
        .then((data: T) => this.JSONResponse(response, data))
        .catch((error: ResponseError) => this.JSONResponse(response, error));
    }

  public UPDATE = <T>(DataModel: Model<any>, rules?: (body: T) => T): ResponseHandler =>
    (request: Request, response: Response): void => {
      const DataModelBody = arguments.length === 2 ? rules(request.body) : request.body;
      new DataModel(DataModelBody).save()
        .then((data: T) => this.JSONResponse(response, data))
        .catch((error: ResponseError) => this.JSONResponse(response, error));
    }

  private JSONResponse<T>(requestResponse: Response, responseData: T): void {
    const status: number = requestResponse.statusCode;

    requestResponse.json({
      responseData,
      status
    });
  }
}

export default new APIRequest();
