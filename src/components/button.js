import React, { useState, useEffect } from "react"

export function ButtonRow(props) {
    return (
        <div className="button-line">
            {props.children}
        </div>
    )
}

export function Button(props) {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (!init) {
            // run initializers
            setInit(true)
        }
    })
    return (
        <a href={props.href}>
            <button>
                <span>{props.children}</span>
            </button>
        </a>
    )
}