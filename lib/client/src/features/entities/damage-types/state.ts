import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit"

import { DamageType } from "@types"

export const damageTypesAdapter = createEntityAdapter<DamageType>({
    selectId: x => x.id,
    sortComparer: (a, b) => (a.game_order < b.game_order) ? 1 : 0,
})

export interface DamageTypesState {
    loading: boolean
    error: any
}

const initialState: DamageTypesState = {
    loading: false,
    error: null,
}

export const damageTypesSlice = createSlice({
    name: "DamageTypes",
    initialState: damageTypesAdapter.getInitialState({
        ...initialState,
    }),
    reducers: {
        setAll(state, action: PayloadAction<DamageType[]>) {
            damageTypesAdapter.setAll(state, action.payload)
        },
    },
})
