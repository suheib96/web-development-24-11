import logo from './logo.svg';
import './App.css';
import Listing from './Listing';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
const [anzahl, setAnzahl] = useState(1);
  const houses = [
    {Id: 1, Name: "Mein erstes Haus", Preis: "350.000", image: "https://www.hanse-haus.de/fileadmin/_processed_/8/b/csm_fertighaus-variant-25-192-hero_bc4464687c.jpg",active: true,reserviert: false},
    {Id: 2, Name: "Mein zweites Haus", Preis: "125.000", image: "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp",active: true,reserviert: false},
    {Id: 3, Name: "Mein drittes Haus", Preis: "100.000", image: "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp",active: false, reserviert: true},
    {Id: 4, Name: "Mein viertes Haus", Preis: "150.000", image: "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp",active: false, reserviert: true},
    {Id: 5, Name: "Mein fuenftes Haus", Preis: "200.000", image: "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp",active: true, reserviert: false},
    {Id: 6, Name: "Mein sechstes Haus", Preis: "250.000", image: "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp",active: false, reserviert: true},
  ]
  return (
    <div className="HouseContainer">
      <Link to="/pokemon">Pokemon</Link>
    {houses.slice(0, anzahl).map((house) => 
      <Listing key={house.Id} Name={house.Name} Preis={house.Preis} image={house.image} verfügbarkeit={house.active} reserviert={house.reserviert}> </Listing>
    )}
  <button onClick={() => setAnzahl(anzahl + 1)}>Mehr anzeigen</button>
    </div>
  );
}

export default App;
