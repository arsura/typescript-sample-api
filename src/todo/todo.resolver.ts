import TodoService from './todo.service'
import { GetTodoQuery } from './todo.dto'
import { TodoResponse } from './todo.model'

export default {
  Query: {
    todo(_: any, args: GetTodoQuery): TodoResponse {
      const { id } = args
      const service = new TodoService()
      const result = service.findById(id)
      return result
    },
    todos(_: any, args: GetTodoQuery): TodoResponse[] {
      const { skip, limit, title } = args
      const service = new TodoService()
      const result = service.find({ skip, limit, title })
      return result
    },
  },
}
