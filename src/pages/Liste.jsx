import React, { useState, useEffect, Fragment } from 'react'
import { UtilisateurCard } from '../components/UtilisateurCard'
import UtilisateurService from '../services/UtilisateurService'

export const Liste = () => {

    const [listeUtilisateur, setListeUtilisateur] = useState([])

    useEffect(() => {
        refreshList()
    }, [])

    const refreshList = () => {
        UtilisateurService.getAllUtilisateurs()
            .then(
                (utilisateurs) => {setListeUtilisateur(utilisateurs)}
                );
    }
    
    const deleteUtilisateur = (utilisateur) => {
        UtilisateurService.deleteUtilisateur(utilisateur)
            .then(() => refreshList())        
    }

    return (
        <Fragment>
            <h1>Liste d'utilisateurs</h1>
            {listeUtilisateur.length > 0 && listeUtilisateur.map((utilisateur) => { return <UtilisateurCard key={utilisateur.id} utilisateur={utilisateur} handleDelete={deleteUtilisateur}/> })}
        </Fragment>
    )
}
