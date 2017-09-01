import { Request, Response, Router } from 'express';
import { model } from 'mongoose';

class APIRequest {
  public get = (Model: any): any => {
    const RES = (response: Response, request: Request) =>
      Model.find({})
        .then((data: any) => response.json({data}))
        .catch((error: any) => response.json({error}));

    return RES;
  }
}

export default new APIRequest();
