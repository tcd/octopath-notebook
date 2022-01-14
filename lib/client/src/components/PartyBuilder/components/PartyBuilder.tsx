import { Component } from "react"

export interface PartyBuilderState {
    party_id?: number
}

export const initialState: PartyBuilderState = {
    party_id: null,
}

export class PartyBuilder extends Component<any, PartyBuilderState, any > {

    public state: PartyBuilderState

    public node: Element | null | Text

    constructor(props) {
        super(props)
        this.state = initialState
    }

    public componentDidMount(): void {
        this.setState({ ...this.node.parentElement.dataset })
    }

    public render(): JSX.Element {
        return (
            <div className="d-flex align-content-center" ref={node => this.node = node}>
                Party Builder
            </div>
        )
    }
}
