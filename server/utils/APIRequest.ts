import { Request, Response} from 'express';
import { Model } from 'mongoose';

class APIRequest {

  public GET_MANY = (model: Model<any>): any => {
    const RESPONSE_HANDLER = (request: Request, response: Response): void => {
      model.find({})
        .then((data: any) => this.getJSONResponse(response, data))
        .catch((error: any) => this.getJSONResponse(response, error));
    };

    return RESPONSE_HANDLER;
  }

  public GET_SINGLE = (model: Model<any>): any => {
    const RESPONSE_HANDLER = (request: Request, response: Response): void => {
      const slug: number = request.params.slug;
      model.findOne({slug})
        .then((data: any) => this.getJSONResponse(response, data))
        .catch((error: any) => this.getJSONResponse(response, error));
    };

    return RESPONSE_HANDLER;
  }

  public POST = (model: Model<any>): any => {
    const RESPONSE_HANDLER = (request: Request, response: Response): void => {
      const postModel = new model(request.body);
      postModel.save()
        .then((data: any) => this.getJSONResponse(response, data))
        .catch((error: any) => this.getJSONResponse(response, error));
    };

    return RESPONSE_HANDLER;
  }

  public UPDATE = (model: Model<any>): any => {
    const RESPONSE_HANDLER = (request: Request, response: Response): void => {
      const postModel = new model(request.body);
      postModel.save()
        .then((data: any) => this.getJSONResponse(response, data))
        .catch((error: any) => this.getJSONResponse(response, error));
    };

    return RESPONSE_HANDLER;
  }

  private getJSONResponse = (response: Response, handler: any) => {
    const status = response.statusCode;
    response.json({
      handler,
      status
    });
  }
}

export default new APIRequest();
