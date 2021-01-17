import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
  uri: "http://localhost:4000/todoGraphQL",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
