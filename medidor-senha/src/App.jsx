import React, { useState } from 'react';
import './index.css'

function App() {

  const [ senha ,setSenha ] = useState('')
  
  
  function valida(senha){

    let count = false,
     menor = false ,
     maior= false, 
     especial= false, 
     numero= false
    
    
    if(senha.length >=8){
      count = true
    }
    if(senha.match(/[a-z]/)){
      menor = true
    }
    if(senha.match(/[A-Z]/)){
      maior = true
    }
    if(senha.match(/[0-9]/)){
      numero = true
    }
    if(senha.match(/[!@#$%&?*]/)){
      especial = true
    }
    
    let state ={count,menor,maior,numero,especial}
    return (state)
  }
  
  function inputChange(event){
    setSenha(event.target.value)
    
    valida(senha)
  }
  
  return (

    <>
      <main>
        <h1>Medidor de Força de Senha</h1>
          <div>
            <p>Senha: <input value={senha} onChange={inputChange} /></p>
            
        
          </div>

      </main>
    </>
  )
}

export default App
