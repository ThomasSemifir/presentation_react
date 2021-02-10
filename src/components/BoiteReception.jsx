import React from 'react'
import {ListeMessagesNonLus} from './ListeMessagesNonLus'

export const BoiteReception = (props) => {
    if(props.warn) {
        return null;
    }
    
    const messagesNonLus = props.messagesNonLus;
    return (
        <div>
            { messagesNonLus ? <ListeMessagesNonLus messagesNonLus={messagesNonLus}/> : <p>Vous n'avez aucun message non lu!</p> }
        </div>
    )
}
