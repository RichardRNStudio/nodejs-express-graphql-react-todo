import gql from "graphql-tag";

export const ADD_ITEM = gql`
  mutation AddItem($input: ItemInput!) {
    addItem(input: $input) {
      id
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation UpdateItem($id: Int!, $input: ItemInput!) {
    updateItem(id: $id, input: $input) {
      id
    }
  }
`;

export const DELETE_ITEM = gql`
  mutation DeleteItem($id: Int!) {
    deleteItem(id: $id) {
      id
    }
  }
`;
