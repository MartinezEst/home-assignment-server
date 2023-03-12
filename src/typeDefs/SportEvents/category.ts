import { gql } from 'apollo-server';

export default gql`
  type LangValuePair {
    lang: String!
    value: String!
  }

  type Category {
    id: ID!
    slug: String!
    translations: [LangValuePair!]!
  }
`;
