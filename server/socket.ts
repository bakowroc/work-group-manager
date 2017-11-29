import { Server } from 'http';
import * as socketClient from 'socket.io';
import ChatMessageModel from './models/ChatMessageModel';
import ChatModel from './models/ChatModel';

class Socket {

  private io: any;

  public connect = (server: Server): void => {
    this.io = socketClient.listen(server);
    this.emitter();
  }

  private emitter = (): void => {
    this.io.sockets.on('connection', this.chatEmitter);
  }

  private chatEmitter = (socket: any): void => {
    try {
      const chatRoom: string = socket.handshake.headers.referer.split('?')[1];
      socket.on('joinChatRoom', async (room: string) => {
        if (!(room in socket.rooms)) {
          socket.join(room);
        }

        const chat: any = await ChatModel.findOne({_id: room});
        const messages = await ChatMessageModel.find({chat: room}).populate('author');
        socket.emit('returnChatMessages', {...chat._doc, messages});
      });

      socket.on('newChatMessageIncome', async (data: any) => {
        const {_id} = await new ChatMessageModel(data).save();
        const message = await ChatMessageModel.findOne({_id}).populate('author');
        this.io.in(chatRoom).emit('returnChatMessages', {messages: [message]});
        socket.emit('returnChatMessages', {messages: [message]});
      });

    } catch (error) {
      /*tslint:disable */
      console.log(error);
       /*tslint:enable */
    }
  }
}

export default new Socket();
