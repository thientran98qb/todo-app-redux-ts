export interface ListTodo {
    id: number | string,
    name: string,
    completed: boolean,
    priority: string
}
export interface Filter {
    search: string,
    status: string,
    priority: []
}
export interface TodoState {
    filters: Filter,
    lists: ListTodo[]
}
export type TodoActionType = {
    type: string,
    payload?: ListTodo | Filter | string | number,
    text: string
}
export interface Priority {
    Low: string,
    Medium: string,
    High: string
}