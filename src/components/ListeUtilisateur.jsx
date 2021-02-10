import React, { Fragment, useState } from 'react'
import { AjoutUtilisateur } from './AjoutUtilisateur'

export const ListeUtilisateurs = () => {
    const [ListeUtilisateurs, setListeUtilisateurs] = useState([])

    const handleAjoutUtilisateur = (utilisateur) => {
        setListeUtilisateurs([...ListeUtilisateurs, utilisateur])
    }

    return (
        <Fragment>
            {console.log(ListeUtilisateurs)}
            <AjoutUtilisateur ajouterUtilisateur={handleAjoutUtilisateur} />
        </Fragment>
    )
}
