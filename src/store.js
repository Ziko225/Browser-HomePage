import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from "./features/Tasks/tasksSlice"

const store = configureStore({
    reducer: {
        tasks: tasksReducer
    },
})

export default store