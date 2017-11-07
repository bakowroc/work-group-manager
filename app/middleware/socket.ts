import * as Socket from 'socket.io-client';

export const socketMiddleware = Socket('http://localhost:3000');
