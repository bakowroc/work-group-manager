import { Request, Response } from 'express';
import { Model } from 'mongoose';

import { PopulateQuery, ResponseHandler } from '../types/typings';

class APIRequest {

  public GET_MANY = (DataModel: Model<any>, populateQuery: Array<PopulateQuery> = []): ResponseHandler =>
    async (request: Request, response: Response): Promise<void> => {
      try {
        const findBy = request.query;
        const data = await DataModel.find(findBy).populate(populateQuery);
        this.JSONResponse(response, data);
      } catch (error) {
        this.JSONResponse(response, error);
      }
    }

  public GET_SINGLE = (DataModel: Model<any>, populateQuery: Array<PopulateQuery> = []): ResponseHandler =>
    async (request: Request, response: Response): Promise<void> => {
      try {
        const slug: number = request.params.slug;
        const data = await DataModel.findOne({slug}).populate(populateQuery);
        this.JSONResponse(response, data);
      } catch (error) {
        this.JSONResponse(response, error);
      }
  }

  public POST = <T>(DataModel: Model<any>, getBodyByRules?: (body: T) => T): ResponseHandler =>
    async (request: Request, response: Response): Promise<void> => {
      try {
        const DataModelBody = arguments.length === 2 ? getBodyByRules(request.body) : request.body;
        const data = await new DataModel(DataModelBody).save();
        this.JSONResponse(response, data);
      } catch (error) {
        this.JSONResponse(response, error);
      }
    }

  public UPDATE = <T>(DataModel: Model<any>, getBodyByRules?: (body: T) => T): ResponseHandler =>
    async (request: Request, response: Response): Promise<void> => {
      try {
        const slug: number = request.params.slug;
        const DataModelBody = arguments.length === 2 ? getBodyByRules(request.body) : request.body;
        const data = await DataModel.findOneAndUpdate({slug}, {$set: DataModelBody});
        this.JSONResponse(response, data);
      } catch (error) {
        this.JSONResponse(response, error);
      }
    }

  public DELETE = (DataModel: Model<any>): ResponseHandler =>
    async (request: Request, response: Response): Promise<void> => {
      try {
        const slug: number = request.params.slug;
        const data = await DataModel.findOneAndRemove({slug});
        this.JSONResponse(response, data);
      } catch (error) {
        this.JSONResponse(response, error);
      }
    }

  private JSONResponse = <T>(requestResponse: Response, responseData: T): void => {
    const status: number = requestResponse.statusCode;
    requestResponse.json({
      responseData,
      status
    });
  }
}

export default new APIRequest();
