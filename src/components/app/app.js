import React, { useState } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './app.css';
import PeoplePage from "../people-page";

const App = () => {
  const [showRandomPlanet, setShowRandomPlanet] = useState(true);
  const randomPlanet = showRandomPlanet ? <RandomPlanet /> : null;

  return (
    <div>
      <Header />
      {randomPlanet}
      <input type='button' value='Toggle planet' onClick={() => setShowRandomPlanet(!showRandomPlanet)} />
        <PeoplePage />
    </div>
  );
};



// const Person = () => {
//     const [showPersonDetails, setShowPersonDetails] = useState(true);
//     const personDetails = showPersonDetails ? <PersonDetails /> : null;
//
//   return (
//     <div>
//       <Header />
//       {personDetails}
//       <input type='button' value='Toggle planet' onClick={() => setShowPersonDetails(!showPersonDetails)} />
//
//       <div className="row mb2">
//         <div className="col-md-6">
//           <ItemList />
//         </div>
//         <div className="col-md-6">
//           <PersonDetails />
//         </div>
//       </div>
//     </div>
//   );
// }
export default App;
