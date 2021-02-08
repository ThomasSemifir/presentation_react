import React, { Component, Fragment } from 'react'

export default class ComposantClasse extends Component {

    handleClick = () => {
        this.props.incrementer()
    }

    render() {
        return (
            <Fragment>
                <button onClick={this.handleClick}>{this.props.texte}</button>
            </Fragment>
        )
    }
}
