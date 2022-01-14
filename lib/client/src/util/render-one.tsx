import React from "react"
import { render } from "react-dom"

export const renderOne = (domTarget: string, component: any) => {
    document.addEventListener("DOMContentLoaded", () => {

        const container = document.getElementById(domTarget)

        if (!container) {
            return null
        }

        render(
            React.createElement(component, {}, null),
            container,
        )

    })
}
