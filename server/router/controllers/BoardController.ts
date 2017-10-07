import { Router } from 'express';

import BoardModel from '../../models/BoardModel';
import APIRequest from '../../utils/APIRequest';

class BoardController {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes = () => {
    this.router.get('/', APIRequest.GET_MANY(BoardModel));
    this.router.get('/:slug', APIRequest.GET_SINGLE(BoardModel));
    this.router.post('/', APIRequest.POST(BoardModel));
  }
}

export default new BoardController().router;
