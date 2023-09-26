import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

import { typeDefs } from "./graphql/typeDefs.js"
import { resolvers } from "./graphql/resolver/index.js"

const PORT = 4000



// setup
const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT }
})

console.log(`Server running at ${url}`);