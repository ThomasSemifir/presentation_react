import React, { Fragment } from 'react'

export const ListeMessagesNonLus = (props) => {
    return (
        <Fragment>
            <p>Voici la liste des messages non lus:</p>
            <p>{props.messagesNonLus}</p>
        </Fragment>
    )
}
