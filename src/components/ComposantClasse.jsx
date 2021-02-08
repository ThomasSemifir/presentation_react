import React, { Component, Fragment } from 'react'

export class ComposantClasse extends Component {

    render() {
        return (
            <Fragment>
                <p>{this.props.compteur}</p>
                <button onClick={this.props.incrementer}>{this.props.texte}</button>
            </Fragment>
        )
    }
}
