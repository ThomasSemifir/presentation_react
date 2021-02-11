import React from 'react'
import { Bouton } from './commons/Bouton'

export const UtilisateurCard = (props) => {
    const style = {
        card: {
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
        },
        cardBody: {
            padding: "1.75em"
        },
        delete: {
            float: "right",
            backgroundColor: "#dd0031",
            color: "whitesmoke"
        }
    }

    return (
        <div style={style.card}>
            <Bouton style={style.delete} onClick={() => props.handleDelete(props.utilisateur)}>&times;</Bouton>
            <div style={style.cardBody}>
                <p>{props.utilisateur.nom}</p>
                <p>{props.utilisateur.prenom}</p>
                <p>{props.utilisateur.email}</p>
            </div>
        </div>
    )
}
