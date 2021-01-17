const gql = require("graphql-tag");

const todoSchema = gql`
  type Query {
    item(id: Int!): Item
    items: [Item]
  }
  type Mutation {
    updateItem(id: Int!, input: ItemInput!): Item
    addItem(input: ItemInput!): Item
    deleteItem(id: Int!): Item
  }
  type Item {
    id: Int!
    category: String!
    description: String!
  }
  input ItemInput {
    category: String!
    description: String!
  }
`;

module.exports = todoSchema;
