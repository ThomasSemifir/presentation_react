import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { Accueil } from '../../pages/Accueil'
import { Formulaire } from '../../pages/Formulaire'
import { Liste } from '../../pages/Liste'
import { NavBar } from './NavBar'



const pages = [
    { href:"/accueil", name:"Accueil" },
    { href:"/formulaire", name:"Formulaire" },
    { href:"/users", name:"Utilisateurs" }
]

export const Routing = () => {
    return (
        <Router>
            <NavBar pages={pages}/>
            <Switch>
                <Redirect exact path="/" to="/accueil" />
                <Route path="/accueil">
                    <Accueil />
                </Route>
                <Route path="/formulaire">
                    <Formulaire />
                </Route>
                <Route path="/users">
                    <Liste />
                </Route>
            </Switch>
        </Router>
    )
}
