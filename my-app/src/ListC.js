import React from 'react'
import Article from './Article';
import './index.css';

export default function ListC({ client }) {
    const ListElements = client.map(myclient =>
        <li><Article myclient={myclient}/></li>                            
    )
    return (
    <ul> 
       {ListElements}
    </ul>
    )
}