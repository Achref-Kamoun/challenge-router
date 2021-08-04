import './App.css';
import React from 'react';
import Navbarr from './compoment/navbar';
import Home from './compoment/Home';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { useState } from 'react';
import Cardlist from './compoment/cardlist';
import AddCard from './compoment/addcard';


function App() {

  const [tour,setTour] = useState(
    [{title : 'France', posterURL : '/France.jpeg', description : 'Tourism in France directly contributed 79.8 billion euros to gross domestic product (GDP) in 2013 30% of which comes from international visitors and 70% from domestic tourism spending The total contribution of travel and tourism represents 9.7% of GDP and supports 2.9 million jobs (10.9% of employment) in the country',price : 4000, id : 1},
     {title : 'germany', posterURL : '/germany.jpg', 
     description : 'Germany is the eighth-most-visited country in the world, with a total of 407.26 million overnights during 2012. ... Including indirect and induced impacts, the industry contributes 4.5% of German GDP and supports 2 million jobs (4.8% of total employment). The ITB Berlin is the worlds leading tourism trade fair.',price : 5000, id : 2},
     { title : 'Spain', posterURL : '/Spain.jpg',
      description : 'Spain pleasant Mediterranean climate, its dramatic coastlines, charming landscapes, rich historical legacy, eclectic culture,culinary expertise and vibrant nightlife have made it a much sought-after destination,and Spain international tourist industry is among the largest in the world.',price : 8000,id : 3}    
    ]
  ) ;
  return (
    <BrowserRouter>
    <Navbarr/>
    <Route exact path='/' render={() => <Home tour={tour} />}/>
    <Route exact path= '/Our-Tour' render={ () => <Cardlist tour={tour} /> }/>
    <Route exact path= '/Add-New-Tour' render={ () => <AddCard tour={tour} /> }/>
    </BrowserRouter>
  );
}

export default App;
