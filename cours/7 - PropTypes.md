# PropTypes

Ils permettent de rajouter une couche de débugage supplémentaire.
Ils n'empêchent pas l'exécution du code, mais permettent de connaître plus facilement d'où vient une erreur.

Ainsi, si nous reprenons l'exercice du formulaire:

Il faut tout d'abord installer le package prop-types

```jsx
import React, { Fragment, useState } from 'react'
import propTypes from 'prop-types'


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

// la vérification des props se fait en dehors du corps du component
AjoutUtilisateur.propTypes = {
    ajouterUtilisateur: propTypes.func.isRequired
}
```

Les types peuvent être vérifiés, attention à la dénomination, function n'existe pas, il faut utiliser "func"

Le isRequired permet de vérifier que la prop concernée a bien été passée