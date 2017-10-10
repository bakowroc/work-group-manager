import {Request, Response} from 'express';
import { Model } from 'mongoose';

import UserModel from '../models/UserModel';
import { ResponseError, ResponseHandler } from '../types/typings';

class APIRequest {

  public GET_MANY<T>(DataModel: Model<any>): ResponseHandler {
    const RESPONSE_HANDLER = (request: Request, response: Response): void => {
      DataModel.find({})
        .then((data: Array<T>) => this.getJSONResponse(response, data))
        .catch((error: ResponseError) => this.getJSONResponse(response, error));
    };

    return RESPONSE_HANDLER;
  }

  public GET_SINGLE<T>(DataModel: Model<any>): ResponseHandler {
    const RESPONSE_HANDLER = (request: Request, response: Response): void => {
      const slug: number = request.params.slug;
      DataModel.findOne({slug})
        .then((data: T) => this.getJSONResponse(response, data))
        .catch((error: ResponseError) => this.getJSONResponse(response, error));
    };

    return RESPONSE_HANDLER;
  }

  public POST<T>(DataModel: Model<any>, rules?: (body: T) => T): ResponseHandler {
    const RESPONSE_HANDLER = (request: Request, response: Response): void => {
      const DataModelBody = rules ? rules(request.body) : request.body;
      new DataModel(DataModelBody).save()
        .then((data: T) => this.getJSONResponse(response, data))
        .catch((error: ResponseError) => this.getJSONResponse(response, error));
    };

    return RESPONSE_HANDLER;
  }

  public UPDATE<T>(DataModel: Model<any>, rules?: (body: T) => T): ResponseHandler {
    const RESPONSE_HANDLER = (request: Request, response: Response): void => {
      const DataModelBody = rules ? rules(request.body) : request.body;
      new DataModel(DataModelBody).save()
        .then((data: T) => this.getJSONResponse(response, data))
        .catch((error: ResponseError) => this.getJSONResponse(response, error));
    };

    return RESPONSE_HANDLER;
  }

  private getJSONResponse<T>(requestResponse: Response, responseData: T): void {
    const status: number = requestResponse.statusCode;
    requestResponse.json({
      responseData,
      status
    });
  }
}

export default new APIRequest();
