import { Provider } from "react-redux"

import { store } from "@app/state"

import {
    PartyBuilder,
} from "."

export const App = () => {
    return (
        <Provider store={store}>
            <PartyBuilder />
        </Provider>
    )
}
