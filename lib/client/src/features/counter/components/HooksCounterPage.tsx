import React from "react"

export class HooksCounterPage extends React.Component {

    public state: any

    constructor(props: any) {
        super(props)
        this.state = { isToggleOn: true }

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevState: any) => ({ isToggleOn: !prevState.isToggleOn }))
    }

    render() {
        return (
            <>
                <main>
                    <h2>State with Hooks</h2>
                </main>
                <hr className="my-5" />
                <section>
                    <button onClick={this.handleClick} className="btn btn-primary">
                        {this.state.isToggleOn ? "ON" : "OFF"}
                    </button>
                </section>
            </>
        )
    }
}
