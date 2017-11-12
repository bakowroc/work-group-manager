import * as bodyParser from 'body-parser';
import { Application, Router } from 'express';
import * as Express from 'express';
import { Server as HTTPServer } from 'http';
import * as path from 'path';

import { Config } from './config';
import Database from './database';
import BoardRoutes from './router/controllers/BoardController';
import ChatRoutes from './router/controllers/ChatController';
import ProjectRoutes from './router/controllers/ProjectController';
import TaskRoutes from './router/controllers/TaskController';
import UserRoutes from './router/controllers/UserController';
import { Route } from './router/routes';

class Server {
  public app: Application;
  private router: Router;

  constructor() {
    this.app = Express();
    this.router = Router();
    this.config();
    this.routes();
    this.appRoutes();
  }

  private config = (): void => {
    this.app.use(bodyParser.urlencoded({extended: true}));
    this.app.use(bodyParser.json());
    this.app.use(Express.static(path.resolve('build')));
    this.app.use(Express.static(path.resolve('node_modules')));
    Database.connect();
  }

  private routes = (): void => {
    this.app.use(Config.API_PATH + Route.BOARD, BoardRoutes);
    this.app.use(Config.API_PATH + Route.CHAT, ChatRoutes);
    this.app.use(Config.API_PATH + Route.TASK, TaskRoutes);
    this.app.use(Config.API_PATH + Route.USER, UserRoutes);
    this.app.use(Config.API_PATH + Route.PROJECT, ProjectRoutes);
  }

  private appRoutes = (): void => {
    this.app.use('/fonts', Express.static(path.resolve('node_modules/font-awesome/fonts')));
    this.app.use(Config.ROOT_PATH, (req, res) => {
      res.sendFile(path.resolve('build/index.html'));
    });
  }
}

const app = new Server().app;
export default new HTTPServer(app);
