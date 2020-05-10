import {
  IsNotEmpty,
  IsIn,
  IsOptional,
  IsPositive,
  IsInt,
  Min,
  IsString,
} from 'class-validator'

import { TodoStatus } from './todo.model'

export class TodoRequestDto {
  @IsNotEmpty()
  title: string

  @IsOptional()
  description: string

  @IsOptional()
  @IsIn([TodoStatus.TODO, TodoStatus.DOING, TodoStatus.DONE])
  status: TodoStatus
}

export class GetTodoQuery {
  @IsOptional()
  @IsPositive()
  limit: number

  @IsOptional()
  @IsInt()
  @Min(0)
  skip: number

  @IsOptional()
  title: string
}
