import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "@app/state"
import { GonData, Character, DamageType, Equipment, Job, Stat, EquipmentCategory } from "@types"

export interface AllEntitiesState {
    jobs: Job[]
    characters: Character[]
    equipment: Equipment[]
    equipmentCategories: EquipmentCategory[]
    damageTypes: DamageType[]
    stats: Stat[],
}

const initialState: AllEntitiesState = {
    jobs: [],
    characters: [],
    equipment: [],
    equipmentCategories: [],
    damageTypes: [],
    stats: [],
}

export const allEntitiesSlice = createSlice({
    name: "AllEntities",
    initialState,
    reducers: {
        setJobs:        (state, action: PayloadAction<Job[]>)        => { state.jobs         = action.payload },
        setCharacters:  (state, action: PayloadAction<Character[]>)  => { state.characters   = action.payload },
        setEquipment:   (state, action: PayloadAction<Equipment[]>)  => { state.equipment    = action.payload },
        setDamageTypes: (state, action: PayloadAction<DamageType[]>) => { state.damageTypes  = action.payload },
        setAll: (state, action: PayloadAction<GonData>) => {
            state.jobs                = action.payload.jobs
            state.characters          = action.payload.characters
            state.equipment           = action.payload.equipment
            state.equipmentCategories = action.payload.equipment_categories
            state.damageTypes         = action.payload.damage_types
            state.stats               = action.payload.stats
        },
    },
})

const selectJobs                = (state: RootState) => state.allEntities.jobs
const selectCharacters          = (state: RootState) => state.allEntities.characters
const selectEquipment           = (state: RootState) => state.allEntities.equipment
const selectEquipmentCategories = (state: RootState) => state.allEntities.equipmentCategories
const selectDamageTypes         = (state: RootState) => state.allEntities.damageTypes
const selectStats               = (state: RootState) => state.allEntities.stats

export const AllEntitiesSelectors = {
    jobs:                selectJobs,
    characters:          selectCharacters,
    equipment:           selectEquipment,
    equipmentCategories: selectEquipmentCategories,
    damageTypes:         selectDamageTypes,
    stats:               selectStats,
}
