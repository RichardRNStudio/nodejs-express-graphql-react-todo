import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Table } from "reactstrap";
import client from "./apollo";

export const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      description
    }
  }
`;

const SUBMIT_POST = gql`
  mutation NewItem($input: ItemInput!) {
    newItem(input: $input) {
      id
    }
  }
`;

const examplePost = () => {
  client.mutate({
    variables: { input: { description: "asd" } },
    mutation: SUBMIT_POST,
    refetchQueries: () => [{ query: GET_ITEMS }],
  });
};

const ItemViewer = () => (
  <Query query={GET_ITEMS}>
    {({ loading, data }) => {
      console.log(data);
      return (
        !loading && (
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th onClick={examplePost}>Description</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map(({ id, description }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )
      );
    }}
  </Query>
);

export default ItemViewer;
