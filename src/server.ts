import * as bodyParser from 'body-parser';
import * as Express from 'express';
import { Application, Router } from 'express';

import { Config } from './config';
import { Route } from './router/routes';

import BoardController from './router/controllers/BoardController';
import UserController from './router/controllers/UserController';

class Server {
  public app: Application;
  private router: Router;

  constructor() {
    this.app = Express();
    this.router = Router();
    this.config();
    this.routes();
  }

  private config = (): void => {
    this.app.use(bodyParser.urlencoded({extended: true}));
    this.app.use(bodyParser.json());
  }

  private routes = (): void => {
    this.app.use('/', this.router);
    this.app.get(Config.API_PATH + Route.USER, UserController);
    this.app.get(Config.API_PATH + Route.BOARD, BoardController);
  }
}

export default new Server();
