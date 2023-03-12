import SportEventQuery from './SportEventQuery.js';
import SportEventSubscription from './SportEventSubscription.js';

const combinedResolver = {
  ...SportEventQuery,
  ...SportEventSubscription,
};

export default combinedResolver;
