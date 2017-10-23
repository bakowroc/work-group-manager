import { Router } from 'express';

import TaskModel from '../../models/TaskModel';
import APIRequest from '../../utils/APIRequest';
import { PopulateQuery } from './../../types/typings';

class TaskController {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private getPopulateQuery = (): Array<PopulateQuery> => ([
    {path: 'assigned', select: ''},
    {path: 'author', select: ''},
    {path: 'board', select: ''},
    {path: 'subtasks', select: ''},
    {path: 'tags', select: ''},
  ])

  private getManyElementRoutes = (): void => {
    this.router.route('/:slug')
    .get(APIRequest.GET_SINGLE(TaskModel, this.getPopulateQuery()));
  }

  private getSingleElementRoutes = (): void => {
    this.router.route('/')
      .get(APIRequest.GET_MANY(TaskModel, this.getPopulateQuery()))
      .post(APIRequest.POST(TaskModel));
  }

  public routes = (): void => {
   this.getManyElementRoutes();
   this.getSingleElementRoutes();
  }
}

export default new TaskController().router;
