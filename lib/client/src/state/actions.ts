import {
    counterSlice,
    damageTypesSlice,
    partyBuilderSlice,
} from "@app/features"

const CounterActions = counterSlice.actions
const DamageTypesActions = damageTypesSlice.actions
const PartyBuilderActions = partyBuilderSlice.actions

export {
    CounterActions,
    DamageTypesActions,
    PartyBuilderActions,
}
