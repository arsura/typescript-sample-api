import TodoService from './todo.service'

export default {
  Query: {
    todos() {
      const service = new TodoService()
      const result = service.find({ skip: 0, limit: 20, title: '3' })
      return result
    },
  },
}