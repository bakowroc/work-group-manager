import { Router } from 'express';

import ChatModel from '../../models/ChatModel';
import APIRequest from '../../utils/APIRequest';
import { PopulateQuery } from './../../types/typings';

class ChatController {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private getPopulateQuery = (): Array<PopulateQuery> => ([
    {path: 'messages', select: ''}
  ])

  private getSingleElementRoutes = (): void => {
    this.router.route('/:slug')
    .get(APIRequest.GET_SINGLE(ChatModel, this.getPopulateQuery()))
    .put(APIRequest.UPDATE(ChatModel));
  }

  private getManyElementRoutes = (): void => {
    this.router.route('/')
      .get(APIRequest.GET_MANY(ChatModel, this.getPopulateQuery()))
      .post(APIRequest.POST(ChatModel));
  }

  public routes = (): void => {
   this.getManyElementRoutes();
   this.getSingleElementRoutes();
  }
}

export default new ChatController().router;
