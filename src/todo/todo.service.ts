import { Service, Inject } from 'typedi'
import { NotFoundError } from 'routing-controllers'
import { v1 as uuidv1 } from 'uuid'

import { TodoResponse } from './todo.model'
import { TodoRequestDto, GetTodoQuery } from './todo.dto'

@Service()
export default class TodoService {
  private todos: TodoResponse[]

  constructor() {
    this.todos = []
  }

  find(query: GetTodoQuery): TodoResponse[] {
    const { skip, limit, title } = query
    const regex = new RegExp(title, 'g')
    let todos = this.todos.filter((todo) => todo.title.match(regex))
    todos = todos.slice(skip, limit)
    return todos
  }

  findById(id: string): TodoResponse {
    let todo = this.todos.find((todo) => todo.id === id)
    if (!todo) {
      throw new NotFoundError('Not Found')
    }
    return todo
  }

  create(body: TodoRequestDto): TodoResponse {
    const todo = { id: uuidv1(), ...body }
    this.todos.push(todo)
    return todo
  }

  update(id: string, body: TodoRequestDto): TodoResponse {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...body }
      } else {
        return todo
      }
    })
    return this.findById(id)
  }

  remove(id: string): void {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }
}
