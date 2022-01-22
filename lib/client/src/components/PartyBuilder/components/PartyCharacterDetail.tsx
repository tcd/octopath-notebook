import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { Party, PartyCharacter } from "@types"
import { AppSelectors, DamageTypesActions, PartyBuilderActions } from "@app/state"

export const PartyCharacterDetail = (): JSX.Element => {

    const dispatch = useDispatch()

    const partyCharacter: PartyCharacter = useSelector(AppSelectors.PartyBuilder.currentPartyCharacter)

    // useEffect(() => {
    //     const damage_types = window["gon"]?.damage_types
    //     const party        = window["gon"]?.party
    //     dispatch(DamageTypesActions.setAll(damage_types))
    //     dispatch(PartyBuilderActions.setParty(party))
    // })

    return (
        <div className="party-character-detail">
            <div className="row">
                <div className="col">
                    {partyCharacter?.character?.name}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Category
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
