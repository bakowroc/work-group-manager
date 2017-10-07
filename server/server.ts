import * as bodyParser from 'body-parser';
import * as Express from 'express';
import { Application, Router } from 'express';

import { Config } from './config';
import Database from './database';
import { Route } from './router/routes';

import BoardRoutes from './router/controllers/BoardController';
import TaskRoutes from './router/controllers/TaskController';
import UserRoutes from './router/controllers/UserController';
import WorkspaceRoutes from './router/controllers/WorkspaceController';

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
    this.app.use(Config.API_PATH + Route.BOARD, BoardRoutes);
    this.app.use(Config.API_PATH + Route.TASK, TaskRoutes);
    this.app.use(Config.API_PATH + Route.USER, UserRoutes);
    this.app.use(Config.API_PATH + Route.WORKSPACE, WorkspaceRoutes);
  }
}

export default new Server().app;
