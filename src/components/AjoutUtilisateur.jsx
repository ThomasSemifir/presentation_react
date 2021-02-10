import React, { Fragment, useState } from 'react'

export const AjoutUtilisateur = (props) => {
    const [utilisateur, setUtilisateur] = useState({ nom: "", prenom: "" })

    const handleChangeNom = (event) => {
        setUtilisateur({ ...utilisateur, nom: event.target.value })
    }

    const handleChangePrenom = (event) => {
        setUtilisateur({ ...utilisateur, prenom: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault(); props.ajouterUtilisateur(utilisateur) 
    }
    return (
        <Fragment>
            <form onSubmit={(event) => { handleSubmit(event)}}>
                <div>
                    <label >Nom:
                <input name="nom" onChange={(event) => handleChangeNom(event)} defaultValue={""} />
                    </label>
                </div>
                <div>
                    <label >Prenom:
                <input name="prenom" onChange={(event) => handleChangePrenom(event)} defaultValue={""} />
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </Fragment>
    )
}
