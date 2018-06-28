import './index.css';
import Article from './Article';

import React, {Component} from 'react'
class Article2 extends Component {
    
       
    
render() {
        const{myclient} = this.props
        return (
           <div class = "boxclient2">
            <img class="simg2" src={myclient.general.avatar} />
                <h2>{myclient.job.company}</h2> 
                <p class = "clientcontact2">{myclient.contact.email}</p>  
                <p class = "clientcontact2">{myclient.contact.phone}</p>
                <h4>{myclient.address.street}</h4> 
                <h4>{myclient.address.city}</h4> 
                <h4>{myclient.address.zipCode}</h4> 
                <h4>{myclient.address.country}</h4> 
                
         
            </div>
            
            
        )
    }
      
    
}
        



export default Article2
