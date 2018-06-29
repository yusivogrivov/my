import React, {Component} from 'react'
import ListC from './ListC'
import Searc from './searc'
import Artc from './Artc'
import Article from './Article'
import client from './client'
import './App.css'

import './semantic.css'





class App extends Component {
    
        state = {
           isOpen: true
       }
 

  render() {
    return (
        
      <div className="App">
        <div className="lcol">
            <Searc />
            <ListC client = {client} />
        
        </div>
        
        
<div className="rcol">
          <Artc myclient = {client[0]} />
                    </div> 
        
      </div>
        
    );
  }


    mosClick = () => {
            console.log ("__", "cli")
            this.setState({
                isOpen: !this.state.isOpen
            } )
        }
}
  

  export default App