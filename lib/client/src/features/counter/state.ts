import { RootState } from "@app/state"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// Define a type for the slice state
export interface CounterState {
    value: number
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

// Other code such as selectors can use the imported `RootState` type
const selectCount = (state: RootState) => state.counter.value

export const CountSelectors = {
    value: selectCount,
}
