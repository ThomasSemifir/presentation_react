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
        <ComposantClasse incrementer={this.incrementerCompteur} texte={"Clique moi!"}/>
      </Fragment>
    )
  }
}
