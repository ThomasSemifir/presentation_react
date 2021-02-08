# Création d'un composant fonction

## Structure

Il s'agit d'une fonction classique qui peut s'écrire

```jsx
export function ComposantFonction() {
    return(
        <p>Hello</p>
    )
}
```

ou, façon ESNext:
```jsx
export const ComposantFonction = () => {
    return(
        <p>Hello</p>
    )
}
```

## Récupération des props

Le passage de props du parent vers l'enfant se fait de la même manière que pour un composant classe:

```jsx
<ComposantClasse incrementer={this.incrementerCompteur} texte={this.state.texte}/>
<ComposantFonction incrementer={this.incrementerCompteur} texte={this.state.texte}/>
```

La différence majeure se situe lors de la récupération des valeurs passées:

```jsx
const ComposantFonction = (props) => {
    return (
        //rappel: ne jamais appeler la méthode comme ceci : onClick={props.incrementer()} sous peine d'avoir une boucle infinie et l'erreur "Too many rerenders". Il faut utiliser la syntaxe suivante:
        <button onClick={props.incrementer}>{props.texte}</button>
        // Si nous voulons récupérer un élément, il est possible de l'écrire: onClick={(event) => props.incrementer(event)}
    )
}
```

Il est possible de raccourcir la récupération des props:
```jsx
const ComposantFonction = (incrementer, texte) => {
    ...
    <p>{texte}</p>
    ...
}
```

ou encore 
```jsx
const ComposantFonction = (props) => {
    const {incrementer, texte } = props
}
```

## Les hooks
Par définition, un composant fonction n'a pas d'état (state). Cependant, il est indispensable de pouvoir attribuer un état à nos composants React.

Les hooks sont des fonctionnalités React qui ont été ajoutées à la version 16.8. Ils ont pour but de permettre la manipulation du state et des cycles de vie(cf. partie correspondante) au sein d'un composant stateless.

Les hooks ne sont pas une obligation, ils ne sont pas indispensables à la création d'une application React. Cependant, depuis leur apparition, les développeurs l'utilisent de plus en plus.

Un composant Fonction et un composant Classe peuvent coexister au sein d'une même application; si le code intègre des composants classe, il est possible d'y rajouter des composants fonction et inversement.

Par **Convention OBLIGATOIRE**, tous les hooks commencent par le mot use (useState, useEffect, useContext, ...)

(Il est possible de créer des hooks personnalisés, ce que nous ne ferons pas dans le cadre de cette formation)

Un hook ne doit ni se trouver dans une condition ni dans une boucle et ne doit être appelé que dans un composant Fonction / stateless

Le premier hook rencontré est celui qui permet d'établir et modifier le state : useState

### useState

Dans un composant stateless nous n'avons pas de state créé en même temps que le composant; il faut lui rajouter

Dans un composant classe, le state se définit de la manière suivante (rappel):
```jsx
constructor(props){
    super(props);
    this.state = initialState;
}
```

Dans un composant stateless, cela s'écrit:
```jsx
const [valeur, setValeur] = useState(initialState)
```

useState nous fournit en réalité deux éléments, que nous récupérons par décomposition:
+ state: permet d'appeler l'élément établi en tant que state
+ setState: permet de modifier le state établi

Exemple:
```jsx
    const [compteur, setCompteur] = useState()
    const incrementerCompteur = () => {
        let compteurTmp = compteur;
        setCompteur(++compteurTmp)
    }
```