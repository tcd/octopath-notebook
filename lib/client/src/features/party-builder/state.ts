import { RootState } from "@app/state"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Character, DamageType, Equipment, GonData, Job, JobSupportSkill, Party, PartyCharacter, Stat } from "@types"

export interface PartyBuilderState {
    party: Party
    currentPartyCharacterId?: number
    characters: Character[]
    equipment: Equipment[]
    damageTypes: DamageType[]
    jobs: Job[]
    jobSupportSkills: JobSupportSkill[]
    stats: Stat[],
}

const initialState: PartyBuilderState = {
    party: null,
    currentPartyCharacterId: null,
    characters: null,
    equipment: null,
    damageTypes: null,
    jobs: null,
    jobSupportSkills: null,
    stats: null,
}

export const partyBuilderSlice = createSlice({
    name: "PartyBuilder",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setParty: (state, action: PayloadAction<Party>): PartyBuilderState => {
            const party = action.payload
            const newState: PartyBuilderState = {
                ...state,
                party,
            }
            if (party?.party_characters?.length > 0) {
                newState.currentPartyCharacterId = party.party_characters[0].id
            }
            return newState
        },
        setGonData: (state, action: PayloadAction<GonData>) => {
            return {
                ...state,
                party: action.payload?.party,
                currentPartyCharacterId: action?.payload?.party?.party_characters[0]?.id,
                characters: action.payload?.characters,
                equipment: action.payload?.equipment,
                damageTypes: action.payload?.damage_types,
                jobs: action.payload?.jobs,
                jobSupportSkills: action.payload?.job_support_skills,
                stats: action.payload?.stats,
            }
        },
    },
})

// Other code such as selectors can use the imported `RootState` type
export const selectParty = (state: RootState): Party => state.partyBuilder.party
export const selectCurrentPartyCharacter = (state: RootState): PartyCharacter => {
    if (state?.partyBuilder?.currentPartyCharacterId) {
        return state?.partyBuilder?.party?.party_characters?.find(x => x.id == state.partyBuilder.currentPartyCharacterId)
    }
    return null
}

export const PartyBuilderSelectors = {
    party: selectParty,
    currentPartyCharacter: selectCurrentPartyCharacter,
}
