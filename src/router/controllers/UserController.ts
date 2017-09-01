import { NextFunction, Request, Response, Router } from 'express';

import UserModel from '../../models/UserModel';
import APIRequest from '../../utils/APIRequest';

class UserController {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes = () => {
    this.router.get('/', APIRequest.get(UserModel));
  }
}

export default new UserController();
