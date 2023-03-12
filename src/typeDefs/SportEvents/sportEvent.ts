import { gql } from 'apollo-server';

export default gql`
  type SportEvent {
    id: ID!
    category: Category!
    competitors: [Competitor!]!
    markets: [Market!]!
    oldMarkets: [Market]
    startTime: String!
    updatedAt: String!
  }
`;
