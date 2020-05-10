import { gql } from 'apollo-server-koa'

export default gql`
  enum TodoStatus {
    TODO
    DOING
    DONE
  }

  type Todo {
    id: String
    title: String
    description: String
    status: TodoStatus
  }

  type Query {
    todo(id: String!): Todo,
    todos(skip: Int, limit: Int, title: String): [Todo]
  }
`
