import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { Model } from 'mongoose';

import { Config } from '../config';
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

  public AUTHENTICATE = (User: Model<any>, Project: Model<any>): ResponseHandler =>
    async (request: Request, response: Response): Promise<void> => {
      try {
        const project = await Project.findOne({name: request.body.project});
        const user = await User.findOne({
          email: request.body.email,
          password: request.body.password
        });

        const jwtData = {
          user,
          project,
          jwttoken: jwt.sign({me: user.slug, project: {
            slug: project.slug,
            id: project._id
          }}, Config.SECRET, {expiresIn: '1d'})
        };
        this.JSONResponse(response, jwtData);
      } catch (error) {
        this.JSONResponse(response, error);
      }
    }

  public VERIFY = (): any =>
    (request: Request, response: Response, next: any): void => {
      try {
        const token = request.body.token || request.query.token || request.headers['x-access-token'];
        jwt.verify(token, Config.SECRET);
        next();
      } catch (error) {
        this.JSONResponse(response, {
          success: false,
          error
        });
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
