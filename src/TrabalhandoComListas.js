import React, {Component} from 'react';
import Feed from './components/Feed';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
     feed: [       
         {id: 1, username: 'Euller', curtidas: 10, comentarios: 2 },
         {id: 2, username: 'Rogério', curtidas: 20, comentarios: 3 },       
         {id: 3, username: 'Amanda', curtidas: 2000, comentarios: 300 },
         {id: 4, username: 'Amanda', curtidas: 1, comentarios: 0 },        
     ]
    }    
  }  

  render(){
    return(
      <div>
       {
         this.state.feed.map((item)=>{
           return(
             <Feed key={item.id} 
             username={item.username}
             curtidas={item.curtidas}
             comentarios={item.comentarios}/>
           );
         })
       }
      </div>
    );  
  }
}
export default App;