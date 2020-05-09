export enum TodoStatus {
  TODO = 'TODO',
  DONE = 'DONE',
  DOING = 'DOING',
}

export interface TodoResponse {
  id: string
  title: string
  description: string
  status: string
}