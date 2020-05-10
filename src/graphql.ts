import { resolve } from 'path'

import { ApolloServer } from 'apollo-server-koa'
import { mergeTypes, mergeResolvers, fileLoader } from 'merge-graphql-schemas'

import config from './config'

export default new (class Graphql extends ApolloServer {
  constructor() {
    const typeDefs = mergeTypes(
      fileLoader(resolve(__dirname, '**/*.schema.gql.ts')),
    )
    const resolvers = mergeResolvers(
      fileLoader(resolve(__dirname, '**/*.resolver.ts')),
    )
    const playground = {
      endpoint: `http://${config.app.hostname}:${config.app.port}/graphql`,
    }
    super({ typeDefs, resolvers, playground })
  }
})()
