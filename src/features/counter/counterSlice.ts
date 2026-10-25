import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState: CounterState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    addBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  selectors: { selectValue: (state) => state.value },
})

export const { increment, decrement, addBy } = counterSlice.actions
export const { selectValue } = counterSlice.selectors
export default counterSlice.reducer
