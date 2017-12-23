import { Router } from 'express';

import ProjectModel from '../../models/ProjectModel';
import APIRequest from '../../utils/APIRequest';
import { PopulateQuery } from './../../types/typings';

class ProjectController {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private getPopulateQuery = (): Array<PopulateQuery> => ([
    {path: 'boards', select: ''},
  ])

  private getSingleElementRoutes = (): void => {
    this.router.route('/:slug')
    .get(APIRequest.GET_SINGLE(ProjectModel, this.getPopulateQuery()))
    .put(APIRequest.UPDATE(ProjectModel));
  }

  private getManyElementRoutes = (): void => {
    this.router.route('/')
      .get(APIRequest.GET_MANY(ProjectModel, this.getPopulateQuery()))
      .post(APIRequest.POST(ProjectModel));
  }

  public routes = (): void => {
   this.getManyElementRoutes();
   this.getSingleElementRoutes();
  }
}

export default new ProjectController().router;
