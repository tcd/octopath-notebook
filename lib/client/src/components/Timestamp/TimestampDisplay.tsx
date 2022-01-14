import React from "react"
import moment from "moment"

/**
 * Displays nicely formatted datetime values.
 */
export class TimestampDisplay extends React.Component {

    public state: any

    public node: Element | null | Text

    public timestamp?: Date

    constructor(props) {
        super(props)
        this.state = {
            componentId: null,
            timestamp: null,
        }
    }

    public componentDidMount(): void {
        this.setState({ ...this.node.parentElement.dataset })
    }

    public render(): JSX.Element {
        const timestampString = this.state?.timestamp

        if (timestampString === null || timestampString === "") {
            return (<span ref={node => this.node = node} className="text-muted">none</span>)
        }

        const timestamp = moment(timestampString)

        const dateString = timestamp.format("MMM Do, YYYY")
        const timeString = timestamp.format("hh:mm A")

        return (
            <div className="d-flex align-content-start" ref={node => this.node = node}>
                <div className="text-center">
                    <time dateTime={timestampString} className="timestamp">
                        {dateString}
                        <small>{timeString}</small>
                    </time>
                </div>
            </div>
        )
    }
}
