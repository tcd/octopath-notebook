import { RootState } from "./store"

import {
    CountSelectors,
    PartyBuilderSelectors,
    damageTypesAdapter,
    AllEntitiesSelectors,
} from "@app/features"

const damageTypeSelectors = damageTypesAdapter.getSelectors((state: RootState) => state.damageTypes)

export const AppSelectors = {
    Counter:      { ...CountSelectors },
    PartyBuilder: { ...PartyBuilderSelectors },
    Entities:     { ...AllEntitiesSelectors },
    DamageTypes:  {
        ...damageTypeSelectors,
    },
}
