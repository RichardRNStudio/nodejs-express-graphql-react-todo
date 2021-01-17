import gql from "graphql-tag";

export const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      category
      description
    }
  }
`;
