import { gql } from 'apollo-server';

export default gql`
  type SportEventData {
    type: String
    payload: SportEvent!
  }
`;
