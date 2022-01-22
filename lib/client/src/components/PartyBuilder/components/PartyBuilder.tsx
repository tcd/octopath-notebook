import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { GonData, Party, PartyCharacter } from "@types"
import { AppSelectors, DamageTypesActions, PartyBuilderActions } from "@app/state"
import { Base64Image } from "@app/components"
import { PartyCharacterDetail } from "."

export const PartyBuilder = (): JSX.Element => {

    const dispatch = useDispatch()

    const party: Party = useSelector(AppSelectors.PartyBuilder.party)

    useEffect(() => {
        const gonData: GonData = window["gon"]
        // const damage_types = window["gon"]?.damage_types
        // const party        = window["gon"]?.party
        // dispatch(PartyBuilderActions.setParty(party))
        // dispatch(DamageTypesActions.setAll(damage_types))
        dispatch(PartyBuilderActions.setGonData(gonData))
    })

    return (
        <div className="">
            <div className="row">
                <div className="col-4"> Party: {party?.name}</div>
                <div className="col-4">
                    <ul>
                        {partyCharacterList(party?.party_characters)}
                    </ul>
                </div>
                <div className="col-4">
                    <PartyCharacterDetail />
                </div>
            </div>
        </div>
    )
}

export const partyCharacterList = (partyCharacters: PartyCharacter[]): JSX.Element[] => {
    return partyCharacters?.map((partyCharacter) => (
        <li key={partyCharacter?.id}>
            <Base64Image src={partyCharacter?.character?.encoded_picture} />
            {partyCharacter?.name}
        </li>
    ))
}
