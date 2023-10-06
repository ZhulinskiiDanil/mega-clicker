import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0
}

type InitialState = typeof initialState

const counterSlice = createSlice({
  name: 'counter',
  initialState: JSON.parse(JSON.stringify(initialState)) as InitialState,
  reducers: {
    increment(state) { state.counter++ },
    decrement(state) { state.counter-- }
  }
})

export const {
  reducer: counterReducer,
  actions: counterActions
} = counterSlice