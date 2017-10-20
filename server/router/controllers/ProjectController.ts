import { Router } from 'express';

import ProjectModel from '../../models/ProjectModel';
import APIRequest from '../../utils/APIRequest';

class ProjectController {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes = () => {
    this.router.get('/', APIRequest.GET_MANY(ProjectModel));
    this.router.get('/:slug', APIRequest.GET_SINGLE(ProjectModel));
    this.router.post('/', APIRequest.POST(ProjectModel));
  }
}

export default new ProjectController().router;
