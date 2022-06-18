import React from 'react'
import { ListTodo, Priority } from '../../models'

export const ADD_TODO = 'ADD_TODO'
export const FILTER_SEARCH = 'FILTER_SEARCH'
export const FILTER_STATUS = 'FILTER_STATUS'
export const FILTER_PRIORITY = 'FILTER_PRIORITY'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

export const addTodo = (data: ListTodo) => {
    return {
        type: ADD_TODO,
        payload: data
    }
}

export const filtersSearch = (text: string) => {
    return {
        type: FILTER_SEARCH,
        text
    }
}
export const filtersStatus = (text: string) => {
    return {
        type: FILTER_STATUS,
        text
    }
}
export const filtersPriority = (priority: Priority) => {
    return {
        type: FILTER_PRIORITY,
        payload: priority
    }
}

export const toggleCompleted = (id: string | number) => {
    return {
        type: TOGGLE_COMPLETED,
        payload: id
    }
}