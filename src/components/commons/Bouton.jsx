import React from 'react'

export const Bouton = (props) => {
    return (
        <button style={{"backgroundColor": "red"}} onClick={props.onClick}>{props.children}</button>
    )
}
