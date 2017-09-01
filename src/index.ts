import * as Express from 'express';
import { Application } from 'express';

import { Config } from './config';
import Server from './server';

Server.listen(Config.DEV_PORT, () => console.log(`Example app listening on port ${Config.DEV_PORT}!`));
