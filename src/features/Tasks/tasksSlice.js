import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task)
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId)
            tasks.splice(index, 1)
        },
    },
})

export const { removeTask, addTask } = counterSlice.actions

export default counterSlice.reducer