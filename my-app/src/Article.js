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
               <button onClick={this.mosClick} class="ui button"> 
                    {this.state.isOpen ? 'close' : 'open'}
                </button>
            </div>
              
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
    
      mosClick = () => {
            console.log ("__", "cli")
            this.setState({
                isOpen: !this.state.isOpen
            } )
        }
}

export default Article
