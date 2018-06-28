import React from 'react';
import Article from './Article';
import client from './client';
import './App.css';


function Search () {
    return (
           <div class="ui search">
          <div class="ui icon input">
            <input class="prompt" type="text" placeholder="Search countries..."></input>
            <i class="search icon"></i>
          </div>
          <div class="results"></div>
        </div>
        
    )}


function App() {
    return (
        <div> <Search /> 
           <Article myclient={client[0]} /> 
           <Article myclient={client[1]} /> 
           <Article myclient={client[2]} /> 
           <Article myclient={client[3]} /> 
           <Article myclient={client[4]} /> 
           <Article myclient={client[5]} /> 
        </div>
      
     
            )}
  
    



  export default App;