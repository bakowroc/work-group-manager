import { Server } from 'http';
import * as socketClient from 'socket.io';
import TaskModel from './models/TaskModel';

class Socket {

  private client: SocketIOStatic;
  private server: Server;

  constructor() {
    this.client = socketClient;
  }

  public connect = (server: Server): void => {
    this.server = server;
    this.listen();
  }

  private listen = (): void => {
    this.client
      .listen(this.server)
      .sockets
      .on('connection', this.emitter);
  }

  private emitter = (socket: any): void => {
    socket.on('input', (data: Array<any>) => socket.broadcast.emit('output', {data}));
  }
}

export default new Socket();
