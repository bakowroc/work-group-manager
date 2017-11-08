import { Server } from 'http';
import * as socketClient from 'socket.io';
import ChatMessageModel from './models/ChatMessageModel';
import ChatModel from './models/ChatModel';
import ProjectModel from './models/ProjectModel';

class Socket {

  private client: SocketIOStatic;
  private server: Server;

  constructor() {
    this.client = socketClient;
  }

  public connect = (server: Server): void => {
    this.server = server;
    this.emitter();
  }

  private listen = (): any => this.client.listen(this.server);

  private emitter = (): void => {
    this.listen().on('connection', this.chatEmitter);
  }

  private chatEmitter =  (socket: any): void => {
    try {
      socket.on('joinChatRoom', async (room: string) => {
        socket.removeAllListeners();
        socket.leave();
        socket.join(room);
        socket.broadcast.to(room).emit('someoneJoins', room);

        const messages = await ChatMessageModel.find();
        socket.emit('returnChatMessage', messages);

        socket.on('newMessageEmit', (data: Array<any>) => {
          new ChatMessageModel(data).save();
          socket.to(room).emit('returnChatMessage', data);
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Socket();
