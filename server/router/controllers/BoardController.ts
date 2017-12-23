import { Router } from 'express';

import BoardModel from '../../models/BoardModel';
import APIRequest from '../../utils/APIRequest';
import { PopulateQuery } from './../../types/typings';

class BoardController {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private getPopulateQuery = (): Array<PopulateQuery> => ([
    {path: 'project', select: ''},
    {path: 'tasks', select: ''},
  ])

  private getSingleElementRoutes = (): void => {
    this.router.route('/:slug')
    .get(APIRequest.GET_SINGLE(BoardModel, this.getPopulateQuery()))
    .put(APIRequest.UPDATE(BoardModel))
    .delete(APIRequest.DELETE(BoardModel));
  }

  private getManyElementRoutes = (): void => {
    this.router.route('/')
      .get(APIRequest.GET_MANY(BoardModel, this.getPopulateQuery()))
      .post(APIRequest.POST(BoardModel));
  }

  public routes = (): void => {
   this.getManyElementRoutes();
   this.getSingleElementRoutes();
  }
}

export default new BoardController().router;
