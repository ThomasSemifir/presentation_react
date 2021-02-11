#Routing

Avant toute chose : n'hésitez pas à rajouter un peu de CSS pour rendre les choses plus agréables à l'oeil ;)

Le routing React est ce qui permet de créer une application mono-pagée.
Le module doit être installé:

```bash
npm i react-router-dom
```

Il faut l'importer:
```jsx
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
```

## TP

Pour cette partie, nous allons pratiquer en TP:

### Structure du dossier

Dans le dossier src, créer cette arborescence de dossiers:

```
src
|--components
    |--commons
```

Le dossier components contient tous les components que nous allons créer (il est possible de les regrouper ensuite).

Le dossier commons contient l'ensemble des components qui ne sont pas propres à une fonctionnalité ou à une route: il peut s'agir d'un bouton qui sera réutilisé dans plusieurs components, ou dans notre cas de la navbar et du routing par exemple

## Création des composants

Créer 3 pages dans un dossier "pages" au même niveau que components:
+ accueil
+ formulaire
+ liste

Ceux-ci n'affichent pour l'instant que "ceci est le composant <nom_composant>

## Création du Routing

Dans commons, créer un fichier Routing.jsx et y ajouter un composant fonction vide

importer les éléments nécessaires:
```jsx
import { BrowserRouter as Router, Route,Redirect, Switch } from "react-router-dom";
```

Créer le routeur, et utiliser le <Switch> pour assurer la navigation entre les pages:

```jsx
export const Routing = (props) => {
    return (
        <Router>
            <div>
                <a href="/accueil">Accueil</a>
                <a href="/formulaire">Formulaire</a>
                <a href="/users">Users</a>
            </div>
            <Switch>
                <Route path="/accueil">
                    <Accueil/>
                </Route>
                <Route path="/formulaire">
                    <Formulaire/>
                </Route>
                <Route path="/users">
                    <Liste/>
                </Route>
            </Switch>
        </Router>
    )  
}
```

Assurons-nous qu'un path vide soit redirigé vers la page d'accueil:

Juste après la balise ouvrante Switch, rajouter la ligne suivante:
```jsx
    <Redirect exact path="/" to="/accueil"/>
```
Cela permet de rediriger toute requête sur la route / vers /accueil.
Attention, il est impératif de préciser le "exact path", sans quoi TOUTE requête sera redirigée vers accueil!

## Rajouter une navbar

La structure est fonctionnelle et si vous avez rajouté du CSS, elle peut être agréable.

Mais il est préférable de sortir la navigation du routeur pour pouvoir profiter complètement des fonctionnalités de React.

## La partie amusante: VOUS allez faire :)

Dans Routing, créez une constante pages et stockez-y vos liens:
```jsx
const pages = [
    {href:"/accueil", name:"Accueil"},
    {href:"/formulaire", name:"Formulaire"},
    {href:"/users", name:"Utilisateurs"},
]
```

Dans la balise Router, appelez votre composant NavBar et passez-lui les pages en props:
```jsx
    <NavBar
        pages={pages}
    />
```

Dans commons, créez un fichier NavBar.jsx et créez la structure du component.

importez le module navLink:
```jsx
import {NavLink} from 'react-router-dom'
```

Puis itérez sur les props (n'oubliez pas de spécifier une key) pour créer un NavLink pour chaque page du tableau

Un peu d'aide: voici les premières lignes: 

```jsx
export const NavBar = (props) => {
    return (
        <nav>
            {
                props.pages && props.pages.map(
                    ((page,index) =>
                        <NavLink
                            ...
```

## Aller plus loin
+ utiliser json-server
+ rajouter un dossier "services" et y créer UtilisateurService.js (nous ferons nos fetch ici)
+ rendre le formulaire utilisable pour enregister un utilisateur
+ dans liste, afficher une card pour chaque utilisateur enregistré et ajouter la possibilité de cliquer sur un bouton pour supprimer l'utilisateur correspondant