import { configureStore } from "@reduxjs/toolkit"

import {
    counterSlice,
    partyBuilderSlice,
    damageTypesSlice,
} from "@app/features"

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        partyBuilder: partyBuilderSlice.reducer,
        damageTypes: damageTypesSlice.reducer,
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
