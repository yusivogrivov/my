import React from 'react'

function Clients(props) {
    const{client} = props
        return (
            <div>
                <h2>{client.job}</h2>
                <h1>{client.general}</h1>
                <h3>{client.contact}</h3>
            </div>
        )
}

export default Clients
