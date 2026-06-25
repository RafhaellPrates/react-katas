import React, { useState } from 'react';
import './index.css'


function App() {

  const [ senha ,setSenha ] = useState('')

  function inputChange(e){
    setSenha(e.target.value)
  }

  function valida(senha){
    const pass = []

    senha.length >=8 ? pass.push({title: '8 caracteres', check: true ,id:'1'}) :
      pass.push({title: '8 caracteres', check: false, id:'1'})

    senha.match(/[a-z]/) ? pass.push({title: 'um caracter menor', check: true,id:'2'}) :
      pass.push({title: 'um caracter menor', check: false,id:'2'})

    senha.match(/[A-Z]/) ? pass.push({title: 'um caracter maior', check: true,id:'3'}) : 
      pass.push({title: 'um caracter maior', check: false,id:'3'})

    senha.match(/[0-9]/) ? pass.push({title: 'um número', check: true,id:'4'}) :
      pass.push({title: 'um número', check: false,id:'4'})
      
    senha.match(/[!@#$%&?*]/) ? pass.push({title: 'um caracter especial', check: true,id:'5'}) : 
      pass.push({title: 'um caracter especial', check: false,id:'5'})

      const listaCriterios = pass.map( p =>
        <li
          key={p.id}
          style={{
            color: p.check === true ?  'green' : 'red'
          }}
        >
          {p.check === true ? `Tem ${p.title}`: `Precisa ter ${p.title}`}
      
          
        </li>
      )

    return(listaCriterios)
  }
  
  return (
    
    <main>
      <h1>Medidor de Força de Senha</h1>
        <div>
          <p>Senha: <input value={senha} onChange={inputChange} /></p>
            {valida(senha)}
        </div>

    </main>
    
  )
}

export default App
