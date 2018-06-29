import './index.css'
import React, {Component} from 'react'

class Article extends Component {
    

    render() {
        const {myclient} = this.props
        return (
         <div class = "lcol">
            <div class = "boxclient">
                    <img class="simg" src={myclient.general.avatar} />
                      <p class = "clientname">{myclient.general.firstName}  {myclient.general.lastName}</p>
                    <div class= "clienttitle">  <p>{myclient.job.title}</p>  </div>
                  
            </div>
        </div>
        ) }
    
  
}



    



export default Article
