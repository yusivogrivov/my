
import './index.css';
import React from 'react'

function Clients(props) {
    const {myclient} = props
        return (
            
            
            <div class = "boxclient">
                <img class="simg" src={myclient.general.avatar} />
                <p class = "clientname">{myclient.general.firstName}  {myclient.general.lastName}</p>
                <p class = "clienttitle">{myclient.job.title}</p>  
            </div>
        )
}

export default Clients
