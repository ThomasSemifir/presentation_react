import React, { Fragment, useState } from 'react'
import {BoiteReception} from './components/BoiteReception'


const App = () => {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <Fragment>
      <BoiteReception messagesNonLus={""}/>
    </Fragment>
  )
}

export default App