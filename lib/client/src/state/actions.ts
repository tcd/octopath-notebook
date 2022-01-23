import {
    counterSlice,
    damageTypesSlice,
    partyBuilderSlice,
    allEntitiesSlice,
} from "@app/features"

const AllEntitiesActions  = allEntitiesSlice.actions
const CounterActions      = counterSlice.actions
const DamageTypesActions  = damageTypesSlice.actions
const PartyBuilderActions = partyBuilderSlice.actions

export {
    CounterActions,
    DamageTypesActions,
    AllEntitiesActions,
    PartyBuilderActions,
}
