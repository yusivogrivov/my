import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const HOTELS = [
    {
        id: 7969942,
        name: 'Beautiful, best located apartment!',
        description: 'Im Herzen Berlins begrüßt dich diese moderne, helle und komplett eingerichtete 3 Zimmer Wohnung, mit Blick auf den Kreuzberger Spreewaldplatz und nur 200m zum Görlitzer Park.',
        price: 209,
        image: 'https://a1.muscache.com/im/pictures/109467913/296cdac4_original.jpg?aki_policy=x_medium'
    },
    {
        id: 4508183,
        name: 'Fantastic view in a superlocation',
        description: 'A peacefull oasis in the middle of the city, with fantastic view from balcony. The most highlights are in walking distance. Bus, subway, supermarkets, restaurants and cafes just at the corner(URL HIDDEN)',
        price: 104,
        image: 'https://a2.muscache.com/im/pictures/60695965/9cdada99_original.jpg?aki_policy=x_medium'
    },
    {
        id: 13501472,
        name: 'Nice and central in Berlin',
        description: 'Nice altbau apartment (complete renovated) nearby Mauerpark an Bernauer Straße. It is in the district of Berlin-Mitte, you can reach any atrraction of Berlin within less than 30 Minutes by subway tram or bycycle.',
        price: 117,
        image: 'https://a0.muscache.com/im/pictures/158207ca-75db-4f05-90ad-90519c227cf7.jpg?aki_policy=x_medium'
    },
    {
        id: 976856,
        name: 'living at checkpoint charlie',
        description: 'The apartment is in the former East of Berlin between Potsdamer Platz and Alexanderplatz. This part of town is a very attractive residential area and full of history and places to discover. The “Mitte” fashion district, dozens of good restaurants, bars, theatres and clubs are at the doorsteps.',
        price: 48,
        image: 'https://a1.muscache.com/im/pictures/16948729/687c16bc_original.jpg?aki_policy=x_medium'
    }
];

const MAX_DESCRIPTION_LENGTH = 100;

class App extends Component {
  render() {
    return (
<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
        </h2>
        </div>
      </div>
    );
  }
}

export default App;
