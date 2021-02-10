# Exercice

## Enoncé:

1. Créer un composant ListeUtilisateur qui a un state contenant un tableau d'utilisateurs
2. Créer un composant AjoutUtilisateur qui a un state contenant un utilisateur (sous forme nom-prenom)
   1. Ce composant doit permettre à l'utilisateur de rentrer son nom et son prénom
   2. Lorsqu'il clique sur un bouton "submit", l'utilisateur est ajouté au state de ListeUtilisateur
3. Ne vous préoccupez pas de l'affichage pour l'instant, affichez simplement listeUtilisateurs (le state de ListeUtilisateur) en console


## Correction:

**App.js :**
```jsx
import React from 'react'
import { ListeUtilisateurs } from './components/ListeUtilisateur'

 const App = () => {

  return (
    <ListeUtilisateurs />
  )
}

export default App
```

**ListeUtilisateurs.jsx :**
```jsx
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
```

**AjoutUtilisateur.jsx :**
```jsx
import React, { Fragment, useState } from 'react'

export const AjoutUtilisateur = (props) => {
    const [utilisateur, setUtilisateur] = useState({ nom: "", prenom: "" })

    const handleChangeNom = (event) => {
        setUtilisateur({ ...utilisateur, nom: event.target.value })
    }

    const handleChangePrenom = (event) => {
        setUtilisateur({ ...utilisateur, prenom: event.target.value })
    }
    return (
        <Fragment>
            <form onSubmit={(event) => { event.preventDefault(); props.ajouterUtilisateur(utilisateur) }}>
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
```