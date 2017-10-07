import { Router } from 'express';

import TaskModel from '../../models/TaskModel';
import APIRequest from '../../utils/APIRequest';

class TaskController {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes = () => {
    this.router.get('/', APIRequest.GET_MANY(TaskModel));
    this.router.get('/:slug', APIRequest.GET_SINGLE(TaskModel));
    this.router.post('/', APIRequest.POST(TaskModel));
  }
}

export default new TaskController().router;
