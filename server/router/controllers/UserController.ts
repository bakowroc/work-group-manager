import { Router } from 'express';

import UserModel from '../../models/UserModel';
import { User } from '../../types/User';
import APIRequest from '../../utils/APIRequest';

class UserController {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();

  }
  public routes = (): void => {
    this.router.get('/', APIRequest.GET_MANY(UserModel));
    this.router.get('/:slug', APIRequest.GET_SINGLE(UserModel));
    this.router.post('/', APIRequest.POST(UserModel, this.userPostRules));
  }

  private userPostRules = (body: User): User => ({
    ...body,
    password: body.password
  })
}

export default new UserController().router;
