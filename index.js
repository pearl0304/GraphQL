import { ApolloServer} from "apollo-server";
import typeDefs from "./src/graphql/typeDef.js";
import resolvers from "./src/graphql/resolvers.js";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
})

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});