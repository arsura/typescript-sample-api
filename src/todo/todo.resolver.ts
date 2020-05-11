import TodoService from './todo.service'
import { TodosQueryDto, TodoQueryDto, TodoRequestDto } from './todo.dto'
import { TodoResponse } from './todo.model'

export default {
  Query: {
    todo(_: any, args: TodoQueryDto): TodoResponse {
      const { id } = args
      const service = new TodoService()
      const result = service.findById(id)
      return result
    },
    todos(_: any, args: TodosQueryDto): TodoResponse[] {
      const { skip, limit, title } = args
      const service = new TodoService()
      const result = service.find({ skip, limit, title })
      return result
    },
  },
  Mutation: {
    createTodo(_: any, args: TodoRequestDto): TodoResponse {
      const { title, description, status } = args
      const service = new TodoService()
      const result = service.create({ title, description, status })
      return result
    },
  },
}
