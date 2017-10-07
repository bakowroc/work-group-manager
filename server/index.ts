import { Config } from './config';
import Server from './server';

/*tslint:disable */
Server.listen(Config.DEV_PORT, () => console.log(`Example app listening on port ${Config.DEV_PORT}!`));
