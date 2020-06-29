import React, {Component} from 'react';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
       status: true
    }
    this.entrar = this.entrar.bind(this);
  }

  entrar(){
    return this.setState({status: !this.state.status})
  }

  render(){
    return(
      <div>
        {this.state.status?
           <div>
             <h2>Bem vindo ao sistema</h2>
             <button onClick={this.entrar}>Sair</button>
           </div>
           :
           <div>
             Olá Visitante, faça o login
             <button onClick={this.entrar}>Entrar no sistema</button>
             </div>
        }
        
      </div>
    );  
  }
}
export default App;