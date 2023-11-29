import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
}

export const counterSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    addTask: (state,action) => {
      state.tasks.push(action.payload)
    },
    deleteTask: (state,action) => {
      state.tasks = state.tasks.filter(task=> task.id !== action.payload)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer