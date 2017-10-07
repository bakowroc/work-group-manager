import * as bodyParser from 'body-parser';
import * as Express from 'express';
import { Application, Router } from 'express';

import { Config } from './config';
import Database from './database';
import { Route } from './router/routes';

import UserRoutes from './router/controllers/UserController';

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

    Database.connect();
  }

  private routes = (): void => {
    this.app.use('/', this.router);
    this.app.use(Config.API_PATH + Route.USER, UserRoutes);
  }
}

export default new Server().app;
