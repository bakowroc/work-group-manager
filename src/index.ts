import * as Express from 'express';
import { Application } from 'express';

import { Config } from './config';

const app: Application = Express();

app.listen(Config.DEV_PORT, () => console.log(`Example app listening on port ${Config.DEV_PORT}!`));
