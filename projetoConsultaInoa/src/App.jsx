import { useState } from 'react'
import './App.css'
import Campos from './components/Campos'

function App() {

  return (
    <div className="App">
      <h1>Teste</h1>
      <p>Digite o código do Ativo:</p>
      <input type="text" />
      <p>Digite o código do Ativo:</p>
      <input type="text" />
      <Campos />
    </div>
  )
}

export default App
