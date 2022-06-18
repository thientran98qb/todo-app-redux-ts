import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        search: '',
        status: 'All',
        priority: []
    },
    reducers: {
        filterSearch: (state, action) => {
            state.search = action.payload
        },
        filterStatus: (state, action) => {
            state.status = action.payload
        },
        filterPriority: (state, action) => {
            state.priority = action.payload
        }
    }
});
export default filterSlice;