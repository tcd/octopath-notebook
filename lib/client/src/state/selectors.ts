import { RootState } from "./store"

import {
    CountSelectors,
    PartyBuilderSelectors,
    damageTypesAdapter,
} from "@app/features"

const damageTypeSelectors = damageTypesAdapter.getSelectors((state: RootState) => state.damageTypes)

export const AppSelectors = {
    Counter: { ...CountSelectors },
    PartyBuilder: { ...PartyBuilderSelectors },
    DamageTypes: {
        ...damageTypeSelectors,
    },
}
