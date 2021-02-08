import React, { Component, Fragment } from 'react'

export class ComposantClasse extends Component {
    // pour utiliser le state:
    constructor(props) {
        super(props)
        this.state = {
            utilisateur: {
                nom: 'Timio',
                prenom: 'Thomas'
            }
        }
    }

    modifier = () => {
        let newUtilisateur = {...this.state.utilisateur, prenom: 'Jacques'}
        this.setState({utilisateur : newUtilisateur})
    }

    render() {
        return (
            <Fragment>
                <p>{this.state.utilisateur.nom}, {this.state.utilisateur.prenom}</p>
                <button onClick={this.modifier}>Clique</button>
            </Fragment>
        )
    }
}
