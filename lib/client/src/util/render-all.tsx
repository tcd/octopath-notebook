import React from "react"
import { render } from "react-dom"

export const renderAll = (domTarget: string, component: any) => {

    const containerElements = document.getElementsByClassName(domTarget)

    if (!containerElements?.length) {
        return null
    }

    for (const container of containerElements) {
        render(
            React.createElement(component, {}, null),
            container,
        )
    }
}
