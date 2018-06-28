import React from 'react';
import Article from './Article';
import client from './client';
import './App.css';



function App() {
    return (
        <div>
            <Article myclient={client[0]} />
        </div>
    )
}

export default App;
