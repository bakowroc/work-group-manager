import * as SocketIO from 'socket.io-client';

class SocketMiddleware {

  private socketListener: any;

  constructor() {
    this.socketListener = SocketIO('http://localhost:3000');
    this.socketListener.removeAllListeners();
  }

  public watch = (eventIdentifier: string, callback: any): void => {
    this.socketListener.on(eventIdentifier, (data: any) => callback(data));
  }

  public emit = (eventIdentifier: string, data: any): void => {
    this.socketListener.emit(eventIdentifier, data);
  }
}

export const socketMiddleware = new SocketMiddleware();
