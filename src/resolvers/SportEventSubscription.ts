import { PubSub } from 'graphql-subscriptions';
import websocket from '../websocket.js';
import { Message } from '../types/Message.interface.js';

const pubsub = new PubSub();

export default {
  Subscription: {
    sportEventSubscription: {
      subscribe: () => {
        // Get any response and check for updates
        websocket.onMessage((message: Message) => {
          if (message?.type === 'event-update') {
            pubsub.publish('sportEventSubscription', { sportEventSubscription: message.payload });
          }
        });

        websocket.onError((error: Error) => {
          console.error(error);
        });

        websocket.onClose(() => {
          console.log('Connection closed');
        });

        return pubsub.asyncIterator('sportEventSubscription');
      },
    },
  },
};
