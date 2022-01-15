import { Provider } from "react-redux"

import { store } from "@app/state"

import {
    PartyBuilder,
} from "."
import { ReduxCounterPage } from "@app/features"

export const App = () => {
    return (
        <Provider store={store}>
            {/* <PartyBuilder /> */}
            <ReduxCounterPage />
        </Provider>
    )
}
