import * as SocketIO from 'socket.io-client';

class SocketMiddleware {

  private socketListener: any;

  constructor() {
    this.socketListener = SocketIO(location.origin);
  }

  public watch = (eventIdentifier: string, callback: any): void => {
    this.socketListener.on(eventIdentifier, (data: any) => callback(data));
  }

  public emit = (eventIdentifier: string, data: any): void => {
    this.socketListener.emit(eventIdentifier, data);
  }
}

export const socketMiddleware = new SocketMiddleware();
