import { Router } from 'express';

import UserModel from '../../models/UserModel';
import { PopulateQuery } from '../../types/typings';
import { User } from '../../types/User';
import APIRequest from '../../utils/APIRequest';

class UserController {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private getPopulateQuery = (): Array<PopulateQuery> => ([
    {path: 'tasks', select: ''}
  ])

  private getManyElementRoutes = (): void => {
    this.router.route('/:slug')
    .get(APIRequest.GET_SINGLE(UserModel, this.getPopulateQuery()))
    .put(APIRequest.UPDATE(UserModel));
  }

  private getSingleElementRoutes = (): void => {
    this.router.route('/')
      .get(APIRequest.GET_MANY(UserModel, this.getPopulateQuery()))
      .post(APIRequest.POST(UserModel, this.userPostRules));
  }

  public routes = (): void => {
   this.getManyElementRoutes();
   this.getSingleElementRoutes();
  }

  private userPostRules = (body: User): User => ({
    ...body,
    password: body.password
  })
}

export default new UserController().router;
