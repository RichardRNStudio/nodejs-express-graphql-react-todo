const gql = require("graphql-tag");

const todoSchema = gql`
  type Query {
    item(id: Int!): Item
    items: [Item]
  }
  type Mutation {
    updateItem(id: Int!, description: String!): Item
    newItem(input: ItemInput!): Item
  }
  type Item {
    id: Int!
    description: String!
  }
  input ItemInput {
    description: String!
  }
`;

module.exports = todoSchema;
