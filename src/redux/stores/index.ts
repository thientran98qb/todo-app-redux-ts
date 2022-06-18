
// import { createStore } from "redux";
// import combine from "./reducers";

// const store = createStore(combine);


// export default store
import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./reducers/filterSlice";
import todoSlice from "./reducers/todoSlice";

const rootStore = configureStore({
    reducer: {
        todos: todoSlice.reducer,
        filters: filterSlice.reducer
    }
})
export default rootStore
