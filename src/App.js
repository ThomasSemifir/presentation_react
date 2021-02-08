import React, { Fragment, useState } from 'react'
import {ComposantClasse} from './components/ComposantClasse'
import { ComposantFonction } from './components/ComposantFonction'


export default function App() {
  const [compteur, setCompteur] = useState(0)
  const [texte, setTexte] = useState("Clique ici!")

  const incrementerCompteur = () => {
      let compteurTmp = compteur;
      setCompteur(++compteurTmp)
  }

    return (
      <Fragment>
        <p>{compteur}</p>
        <ComposantFonction incrementer={incrementerCompteur} texte={texte}/>
        <ComposantClasse incrementer={incrementerCompteur} texte={texte}/>
      </Fragment>
    )
}
