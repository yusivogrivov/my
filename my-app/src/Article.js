
import './index.css';
import React from 'react'

function Clients(props) {
    const {myclient} = props
        return (
            
            
            <div class = "boxclient">
                <img class="simg" src='https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg' />
                <p class = "clientname">{myclient.general.firstName}  {myclient.general.lastName}</p>
                <p class = "clienttitle">{myclient.job.title}</p>  
            </div>
        )
}

export default Clients
