import './index.css';
import React, {Component} from 'react'

class Article extends Component {
    
    
    state = {
        isOpen: true  
    }

    render() {
        const {myclient} = this.props
        console.log ("___", this.props)
        return (
            
            
            <div class = "boxclient">
                <img class="simg" src={myclient.general.avatar} />
                <p class = "clientname">{myclient.general.firstName}  {myclient.general.lastName}</p>
              <div class= "clienttitle">  <p>{myclient.job.title}</p>  </div>
             <Butt /> 
            </div>
            
            
        )
        
    }
}

function Butt () {
    return( 
             <button onClick={mosClick} class="ui button">
      more
    </button>
    )}


function mosClick() {
    console.log ("clic")
}

export default Article
