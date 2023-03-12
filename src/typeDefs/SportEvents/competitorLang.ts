import { gql } from 'apollo-server';

export default gql`
  type CompetitorLang {
    id: ID!
    lang: String!
    value: String!
  }
`;
