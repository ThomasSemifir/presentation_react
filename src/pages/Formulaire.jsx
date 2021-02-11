import React, { Fragment, useState } from 'react'
import { FormulaireUtilisateur } from '../components/FormulaireUtilisateur'
import UtilisateurService from '../services/UtilisateurService'


export const Formulaire = () => {
    const [utilisateur, setUtilisateur] = useState({nom: "", prenom: "", email: ""})

    const handleChange = (event) => {
        setUtilisateur({...utilisateur, [event.target.name]:event.target.value})
    }
    
    const handleSubmit = () => {
        UtilisateurService.addUtilisateur(utilisateur)
    }

    return (
        <Fragment>
            <h1>Fomulaire d'enregistrement</h1>
            <FormulaireUtilisateur 
                utilisateur={utilisateur}
                handleChange={handleChange}
                handleSubmit={handleSubmit}/>
        </Fragment>
    )
}
