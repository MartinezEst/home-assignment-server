import WebSocket, { ErrorEvent } from 'ws';
import 'dotenv/config';
import { Message } from './types/Message.interface';

// External websocket connection url
const url: string = `${process.env.WSS_API_URL}?username=${process.env.WSS_USERNAME}&password=${process.env.WSS_PASSWORD}`;

// Create a new WebSocket connection
const ws: WebSocket = new WebSocket(url);

// Initial connection
ws.on('open', (): void => {
  console.log('WebSocket connection established');
});

// Connection error
ws.on('error', (error: ErrorEvent): void => {
  console.error('WebSocket error:', error);
});

// Helpers for sending and receiving messages
// and handling errors and closing the connection
const sendMessage = (message: Message): void => {
  ws.send(JSON.stringify(message));
};

const onMessage = (callback: (message: Message) => void): void => {
  ws.on('message', (message) => {
    let data;
    try {
      data = JSON.parse(message.toString());
    } catch {
      data = message.toString();
    }
    callback(data);
  });
};

const onError = (callback: (error: Error) => void): void => {
  ws.on('error', (error) => {
    callback(JSON.parse(error.toString()));
  });
};

const onClose = (callback: () => void): void => {
  ws.on('close', () => {
    callback();
  });
};

export default { sendMessage, onMessage, onError, onClose };
