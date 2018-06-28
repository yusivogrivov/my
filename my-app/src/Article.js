import './index.css';
import Article2 from './Article2';
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
