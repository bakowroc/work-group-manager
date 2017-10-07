import { Router } from 'express';

import UserModel from '../../models/UserModel';
import APIRequest from '../../utils/APIRequest';

class UserController {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes = () => {
    this.router.get('/', APIRequest.GET_MANY(UserModel));
    this.router.get('/:slug', APIRequest.GET_SINGLE(UserModel));
    this.router.post('/', APIRequest.POST(UserModel));
  }
}

export default new UserController().router;
