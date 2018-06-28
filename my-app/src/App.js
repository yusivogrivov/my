import React, { Component } from 'react';
import Article from './Article';
import client from './client';

import logo from './logo.svg';
import './App.css';



function App() {
    return (
        <div>
            <h1>App name</h1>
            <Article cl={client[0]} />
        </div>
    )
}

export default App;
