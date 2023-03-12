import { gql } from 'apollo-server';

export default gql`
  type Market {
    id: ID!
    name: String!
    selections: [Selection!]!
    translations: [LangValuePair!]!
  }
`;
