import React from 'react'
import { Parent } from './components/Parent'

const App = () => {
  return (
    <div>
      <Parent type="premier" val={"Thomas"} />
      <Parent type="second" val={"Timio"} />
    </div>
  )
}

export default App
