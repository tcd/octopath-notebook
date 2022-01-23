import { configureStore } from "@reduxjs/toolkit"

import {
    counterSlice,
    partyBuilderSlice,
    damageTypesSlice,
    allEntitiesSlice,
} from "@app/features"

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        partyBuilder: partyBuilderSlice.reducer,
        damageTypes: damageTypesSlice.reducer,
        allEntities: allEntitiesSlice.reducer,
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
