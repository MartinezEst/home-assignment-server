import { gql } from 'apollo-server';

export default gql`
  type Subscription {
    sportEventSubscription: SportEvent!
  }
`;