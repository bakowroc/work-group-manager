import { Router } from 'express';

import ProjectModel from '../../models/ProjectModel';
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

  private getSingleElementRoutes = (): void => {
    this.router.route('/me')
      .get(APIRequest.GET_SINGLE(UserModel, this.getPopulateQuery()))
      .put(APIRequest.UPDATE(UserModel));

    this.router.route('/:slug')
      .get(APIRequest.GET_SINGLE(UserModel, this.getPopulateQuery()))
      .put(APIRequest.UPDATE(UserModel));
  }

  private getManyElementRoutes = (): void => {
    this.router.route('/')
      .get(APIRequest.GET_MANY(UserModel, this.getPopulateQuery()))
      .post(APIRequest.POST(UserModel, this.userPostRules));
  }

  private authenticateRoutes = (): void => {
    this.router.route('/auth')
      .post(APIRequest.AUTHENTICATE(UserModel, ProjectModel));
  }

  public routes = (): void => {
   this.getManyElementRoutes();
   this.getSingleElementRoutes();
   this.authenticateRoutes();
  }

  private userPostRules = (body: User): User => ({
    ...body,
    password: body.password
  })
}

export default new UserController().router;
