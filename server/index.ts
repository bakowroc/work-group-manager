import { Config } from './config';
import Server from './server';
import Socket from './socket';

/*tslint:disable */
Socket.connect(Server);
Server.listen(process.env.PORT || Config.DEV_PORT, () => console.log(`App run successfully`));