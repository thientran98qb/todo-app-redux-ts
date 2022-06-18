import { createSelector } from "@reduxjs/toolkit"
import { ListTodo } from "../../models"

export const todolistSelector = (state: any) => state.todos
export const searchSelector = (state: any) => state.filters.search
export const statusSelector = (state: any) => state.filters.status
export const prioritySelector = (state: any) => state.filters.priority

export const remainingSelector = createSelector(
    todolistSelector,searchSelector, statusSelector, prioritySelector,
    (todoList, searchText, status, priorities) => {
        return todoList.filter((todo: ListTodo) => {
                if (status === 'All') {
                    return priorities.length ? (todo.name.includes(searchText) && priorities.includes(todo.priority)) : todo.name.includes(searchText);
                }
                return todo.name.includes(searchText) 
                    && ((status === 'Completed') ? todo.completed : !todo.completed)
                    && (priorities.length ? priorities.includes(todo.priority) : true)
            })
})