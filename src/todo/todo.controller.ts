import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  QueryParams,
  Put,
  Delete,
  OnUndefined,
} from 'routing-controllers'

import TodoService from './todo.service'
import { TodoResponse } from './todo.model'
import { TodoRequestDto, GetTodoQuery } from './todo.dto'

@Controller('/todos')
export default class TodoController {
  constructor(private service: TodoService) {}

  @Get()
  get(@QueryParams() query: GetTodoQuery): TodoResponse[] {
    return this.service.find(query)
  }

  @Get('/:id')
  getById(@Param('id') id: string): TodoResponse {
    return this.service.findById(id)
  }

  @Post()
  create(@Body() body: TodoRequestDto): TodoResponse {
    return this.service.create(body)
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() body: TodoRequestDto): TodoResponse {
    return this.service.update(id, body)
  }

  @Delete('/:id')
  @OnUndefined(204)
  remove(@Param('id') id: string): void {
    return this.service.remove(id)
  }
}
