import React from 'react';
import ListC from './ListC';
import client from './client';
import Article2 from './Article2';
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
     <div id = "root">
        <div id = "leftcol"> <Search /> 
            
           <ListC client = {client} /> 
           
        </div>
        
        <div id = "righttcol">
            <Article2 myclient={client[0]}/>
        </div>
      
      </div>
            )}
  

  export default App;