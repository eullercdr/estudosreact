import React from 'react';

const Equipe = (props) => {
  return (
    <div>
     <Sobre 
      nome={props.nome} 
      cargo={props.cargo} 
      idade={props.idade}
      />
      <Social facebook={props.facebook}/>
      <hr/>
    </div>
  )
}

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá sou o {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade} anos</h3>
    </div>
  )
}

const Social = (props) => {
  return (
    <div>
      <a href={props.facebook}>Facebook</a>
      <a>Linkedin</a>
      <a>Youtube</a>
    </div>
  )
}

function App(){
  return <div>
    <h1>Conheça nossa equipe:</h1>
    <Equipe nome="Lucas" cargo="Programador" idade="29"
    facebook="http://globo.com"/>
    <Equipe nome="João" cargo="Designer" idade="29"/>
    </div>
}

export default App;