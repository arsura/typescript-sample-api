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
    todos: [Todo]
  }
`
