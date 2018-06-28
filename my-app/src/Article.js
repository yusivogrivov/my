
import './index.css';
import React from 'react'



function Butt () {
    return( 
             <button onClick={mosClick} class="ui button">
      more
    </button>
    )}


function Clients(props) {
    const {myclient} = props
        return (
            
            
            <div class = "boxclient">
                <img class="simg" src={myclient.general.avatar} />
                <p class = "clientname">{myclient.general.firstName}  {myclient.general.lastName}</p>
              <div class= "clienttitle">  <p>{myclient.job.title}</p>  </div>
             <Butt /> 
            
        
    
            </div>
        )
}

function mosClick() {
    console.log ("ffff")
}

export default Clients
