import { gql } from 'apollo-server';

export default gql`
  type Competitor {
    id: ID!
    name: String!
    score: Int!
    translations: [CompetitorLang!]!
  }
`;
