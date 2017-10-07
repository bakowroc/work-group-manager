import { Router } from 'express';

import WorkspaceModel from '../../models/WorkspaceModel';
import APIRequest from '../../utils/APIRequest';

class WorkspaceController {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes = () => {
    this.router.get('/', APIRequest.GET_MANY(WorkspaceModel));
    this.router.get('/:slug', APIRequest.GET_SINGLE(WorkspaceModel));
    this.router.post('/', APIRequest.POST(WorkspaceModel));
  }
}

export default new WorkspaceController().router;
