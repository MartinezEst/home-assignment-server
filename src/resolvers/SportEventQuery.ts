import { Message } from '../types/Message.interface.js';
import { SportEvent } from '../types/SportEvent.interface.js';
import websocket from '../websocket.js';

const getInitialSportEvents = (): Promise<SportEvent[]> =>
  new Promise((resolve, reject) => {
    let timeout: NodeJS.Timeout;

    let sportEvents: SportEvent[] = [];

    // Keep alive function to detect if no data is received for 1.5 seconds
    const keepAlive = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        console.log('No data received for 1.5 seconds, resolving data');
        if (sportEvents.length === 0) {
          reject('No data received');
        }
        resolve(sportEvents);

        // Empty sportEvents array
        sportEvents = [];
      }, 1500);
    };

    // Send recovery message
    websocket.sendMessage({ type: 'recovery' });

    // Get any response and check for initial data
    websocket.onMessage((message: Message) => {
      if (message?.type === 'event-data' && message?.payload) {
        sportEvents.push(message.payload);
        keepAlive();
      }
    });

    websocket.onError((error: Error) => {
      reject(error);
    });

    websocket.onClose(() => {
      console.log('Connection closed');
    });
  });

export default {
  Query: {
    sportEventQuery: async (): Promise<SportEvent[]> => {
      // Fetch initial data from websocket endpoint
      const sportEvents = await getInitialSportEvents();
      return sportEvents;
    },
  },
};
