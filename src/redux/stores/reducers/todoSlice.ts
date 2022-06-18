// import { ListTodo, TodoActionType } from "../../../models"
// import { todoAction } from "../../actions"

import { createSlice } from "@reduxjs/toolkit";
import { ListTodo } from "../../../models";

// const initialState: ListTodo[] = [
//     {
//         id: 1,
//         name: 'foo',
//         priority: 'Medium',
//         completed: false,
//     },
//     {
//         id: 2,
//         name: 'fooasdasd',
//         priority: 'Medium',
//         completed: true,
//     }
// ]
// const todoReducer = (state = initialState, action: TodoActionType) => {
//     switch (action.type) {
//         case todoAction.ADD_TODO:
//             return [
//                 ...state,
//                 action.payload
//             ]
//         case todoAction.TOGGLE_COMPLETED:
//             return state.map((todo: ListTodo) => todo.id === action.payload ? {...todo, completed: !todo.completed}: todo )
//         default:
//             return state
//     }
// }
// export default todoReducer

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {
            id: 1,
            name: 'foo',
            priority: 'Medium',
            completed: false,
        },
        {
            id: 2,
            name: 'fooasdasd',
            priority: 'Medium',
            completed: true,
        }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleCompleted: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed
            }
        }
    }
})
export default todoSlice