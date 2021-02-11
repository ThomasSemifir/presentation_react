import React from 'react'

export const FormulaireUtilisateur = (props) => {
    return (
        <form onSubmit={(event) => {event.preventDefault(); props.handleSubmit(event)}}>
            <div>
                <label htmlFor="nom">Nom</label>
                <input type="text" value={props.utilisateur.nom} name="nom" id="nom" onChange={(event) => props.handleChange(event)} />
            </div>
            <div>
                <label htmlFor="prenom">Prenom</label>
                <input type="text" value={props.utilisateur.prenom} name="prenom" id="prenom" onChange={(event) => props.handleChange(event)} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" value={props.utilisateur.nom} name="email" id="email" onChange={(event) => props.handleChange(event)} />
            </div>
            <button type="submit">Envoyer</button>
        </form>
    )
}
