import { configureStore } from "@reduxjs/toolkit"

import {
    counterSlice,
} from "@app/features"

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
