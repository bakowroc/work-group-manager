import { Config } from './config';
import Server from './server';

/*tslint:disable */
Server.listen(process.env.PORT || Config.DEV_PORT, () => console.log(`App run successfully`));
