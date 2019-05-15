const path = require('path')

import { GraphQLUpload } from 'graphql-upload'

const appRootPath = require('app-root-path').path
const selfModulePackage = require(path.resolve(appRootPath, 'package.json'))
const selfModuleName = selfModulePackage.name
const selfModule = require(path.resolve(appRootPath, selfModulePackage.main))

const orderedModuleNames = require('@things-factory/env').orderedModuleNames
import { makeExecutableSchema } from 'graphql-tools'

const schemas = orderedModuleNames
  .map(dep => {
    try {
      if (selfModuleName == dep) {
        /* self module entities */
        return selfModule.schema
      } else {
        return require(dep).schema
      }
    } catch (e) {
      console.error(e)
    }
  })
  .filter(schema => schema)
  .reduce(
    (sum, schema) => {
      let { typeDefs, resolvers } = sum

      return {
        typeDefs: {
          types: [...typeDefs.types, ...(schema.typeDefs && schema.typeDefs.types || [])],
          queries: [...typeDefs.queries, ...(schema.typeDefs && schema.typeDefs.queries || [])],
          mutations: [...typeDefs.mutations, ...(schema.typeDefs && schema.typeDefs.mutations || [])]
        },
        resolvers: {
          queries: [...resolvers.queries, ...(schema.resolvers && schema.resolvers.queries || [])],
          mutations: [...resolvers.mutations, ...(schema.resolvers && schema.resolvers.mutations || [])]
        }
      }
    },
    {
      typeDefs: {
        types: [],
        queries: [],
        mutations: []
      },
      resolvers: {
        queries: [],
        mutations: []
      }
    }
  )

console.log('schemas')
console.log(schemas)

const queryTypes = ['type Query {', ...schemas.typeDefs.queries, '}'].join('\n')
const mutationTypes = ['type Mutation {', ...schemas.typeDefs.mutations, '}'].join('\n')

const typeDefs = [
  `
    schema {
      query: Query
      mutation: Mutation
    }
  `,
  queryTypes,
  mutationTypes,

  `scalar Upload`,

  ...schemas.typeDefs.types
]

var queryResolvers = schemas.resolvers.queries.reduce((sum, query) => {
  return {
    ...sum,
    ...query
  }
}, {})

var mutationResolvers = schemas.resolvers.mutations.reduce((sum, mutation) => {
  return {
    ...sum,
    ...mutation
  }
}, {})

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: queryResolvers,
    Mutation: mutationResolvers,
    Upload: GraphQLUpload
  }
})