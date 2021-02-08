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

## Immutabilité et affectation / décomposition
```js
let utilisateur = {nom: 'Timio', prenom:'Thomas'};
console.log(utilisateur);
let newUtilisateur = Object.assign({}, utilisateur, {prenom: 'Jacques'});
console.log(newUtilisateur)
let newUtilisateur2 = {...utilisateur, prenom:'Julien'}
console.log(newUtilisateur2)
```

L'utilisation de l'immutaibilité permet une détection plus simple des changements et notamment lors de l'utilisation de ShouldComponentUpdate()

## Les props

Les props permettent le passage d'informations entre components
Le composant qui envoie les informations est appelé "composant parent", celui qui les reçoit "composant enfant".

Pour passer des informations de l'un à l'autre, nous utiliserons les props:

**Dans App.js :**
```jsx
export default class App extends Component {

  nom = 'Timio'

  render() {
    return (
      <div>
      // L'envoi de props se fait à l'appel du composant en passant la valeur après le nom, ici nous envoyons la valeur "nom = Timio" à travers un objet "nom":
        <ComposantClasse nom={this.nom}/>
      </div>
    )
  }
```

**Dans ComposantClasse.jsx :**
```jsx
import React, { Component, Fragment } from 'react'

export class ComposantClasse extends Component {

    //Si nous souhaitons enregistrer les valeurs reçues en props dans le state du composant
    constructor(this.props) {
        super(this.props)
        this.state = {
            nom : this.props.nom
        }
    }
    
    render() {
        return (
            <Fragment>
            // Nous récupérons les éléments dans l'objet this.props suivi du nom du champ précisé à l'appel du composant
                <p>{this.state.nom}</p>
                <button>Clique</button>
            </Fragment>
        )
    }
}
```

Ou encore, en utilsant un objet en prop:

```jsx
//App.js
import React, { Component } from 'react'
import ComposantClasse from './components/ComposantClasse'

export default class App extends Component {

  utilisateur = {
    nom: 'Timio',
    prenom: 'Thomas'
  }
  render() {
    return (
      <ComposantClasse utilisateur={this.utilisateur}/>
    )
  }
}

//ComposantClasse.jsx
import React, { Component } from 'react'

export default class ComposantClasse extends Component {

    c

    render() {
        return (
            <div>
                <p>nom de l'utilisateur: {this.props.utilisateur.nom}, {this.props.utilisateur.prenom}</p>
            </div>
        )
    }
}
```

### Modifier le parent depuis l'enfant:

Pour cela, il suffit de partager avec l'enfant la méthode pour modifier le parent:

**Exemple :**

```jsx
// Dans App.js:
import React, { Component, Fragment } from 'react'
import ComposantClasse from './components/ComposantClasse'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      compteur : 0
    }
  }

  incrementerCompteur = () => {
    this.setState({compteur : ++this.state.compteur})
  }

  render() {
    return (
      <Fragment>
        <p>{this.state.compteur}</p>
        <ComposantClasse incrementer={this.incrementerCompteur}/>
      </Fragment>
    )
  }
}

//Dans ComposantClasse.jsx:
import React, { Component, Fragment } from 'react'

export default class ComposantClasse extends Component {

    handleClick = () => {
        this.props.incrementer()
    }

    render() {
        return (
            <Fragment>
                <button onClick={this.handleClick}>Clique moi!</button>
            </Fragment>
        )
    }
}
```