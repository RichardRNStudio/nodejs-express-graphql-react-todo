const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildASTSchema } = require("graphql");
const cors = require("cors");
const toDoSchema = require("./schema/toDo");
const toDoResolvers = require("./resolver/resolver");

// GraphQL schema
const schema = buildASTSchema(toDoSchema);

// Create an express server and a GraphQL endpoint
const app = express();
app.use(cors());
app.use(
  "/todoGraphQL",
  graphqlHTTP({
    schema,
    rootValue: toDoResolvers,
    graphiql: true,
  })
);

app.listen(4000, () =>
  console.log(
    "🚀 Express GraphQL Server now running on localhost:4000/todoGraphQL"
  )
);
