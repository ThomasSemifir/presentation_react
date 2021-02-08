# Création d'un composant classe

## Structure de base

```jsx
//Il est impératif d'importer React ainsi que Component afin de travailler sur une application React
import React, { Component, Fragment } from 'react'

//Pour profiter des fonctionnalités de React, notre composant doit hériter de Component
export class ComposantClasse extends Component {
    //la méthode render définit ce qui sera affiché par le component
    render() {
        //return englobe toujours l'intégralité du rendu
        return (
        <Fragment>
            <h1>Super titre!</h1>
            <p>Hello à tous!</p>
        </Fragment>
        )
    }
}
```

## utilisation du state:

```jsx
import React, { Component, Fragment } from 'react'

export class ComposantClasse extends Component {
    // pour utiliser le state:
    constructor(props){
        super(props)
        this.state = {
            elementState: 'peuImporte'
        }
    }

    render() {
        return (
        <Fragment>
        //appel de la valeur enregistrée dans le state
            <h1>{this.state.elementState}</h1>
            <p>Hello à tous!</p>
        </Fragment>
        )
    }
}
```

### Mise à jour du state:

```jsx
import React, { Component, Fragment } from 'react'

export class ComposantClasse extends Component {
    constructor(props){
        super(props)
        this.state = {
            compteur: 0
        }
    }

    // 2. Ma fonction d'incrémentation est appelée à chaque clic, elle appelle la méthode setState de React.Component 
    increment = (event) => {
        // setState est la SEULE manière de mettre le state à jour proprement
        // Cela appelle un nouveau rendu du component
        this.setState({compteur: ++this.state.compteur})
    }

    render() {
        return (
        <Fragment>
        // rajouter des {} au sein du rendu permet d'appeler n'importe quelle expression JS 
            <p>{this.state.compteur}</p>
            // 1. Je lie le clic du bouton à ma fonction incrémenter 
            <button onClick={this.increment}>Clique</button>
        </Fragment>
        )
    }
}
```

## Immutabilité et afectation / décomposition
```js
let utilisateur = {nom: 'Timio', prenom:'Thomas'};
console.log(utilisateur);
let newUtilisateur = Object.assign({}, utilisateur, {prenom: 'Jacques'});
console.log(newUtilisateur)
let newUtilisateur2 = {...utilisateur, prenom:'Julien'}
console.log(newUtilisateur2)
```