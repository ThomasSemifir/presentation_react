import React, { Fragment, useState } from 'react'

export const ComposantFonction = (props) => {
    const {incrementer, texte} = props

    const [localTexte, setLocalTexte] = useState(texte)

    const handleClick = () => {
        setLocalTexte("Bonjour!")
        incrementer()
    }

    return(
        <Fragment>
            <button onClick={handleClick}>{localTexte}</button>
        </Fragment>
    )
}