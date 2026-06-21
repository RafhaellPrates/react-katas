import { useState } from 'react';
import './index.css'

function App() {

  const [senha ,setSenha] = useState('')

  function inputChange(event){
    setSenha(event.target.value)

  }
  
  return (

    
    <main>
      <h1>Medidor de Força de Senha</h1>
        <div>
          <p>Senha: <input value={senha} onChange={inputChange} /></p>
          
        </div>

    </main>
  )
}

export default App
