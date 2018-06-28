import React from 'react'

function Clients(props) {
    const {myclient} = props
        return (
            
            <div>
                <h1>{myclient.general.firstName}</h1>
            </div>
        )
}

export default Clients
