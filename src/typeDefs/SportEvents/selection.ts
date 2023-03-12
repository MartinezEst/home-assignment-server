import { gql } from 'apollo-server';

export default gql`
  type Selection {
    id: ID!
    name: String!
    odds: Float
  }
`;
