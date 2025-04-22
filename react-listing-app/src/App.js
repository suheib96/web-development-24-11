import logo from './logo.svg';
import './App.css';
import Listing from './Listing';

function App() {

  const houses = [
    {Id: 1, Name: "Mein erstes Haus", Preis: "350.000", image: "https://www.hanse-haus.de/fileadmin/_processed_/8/b/csm_fertighaus-variant-25-192-hero_bc4464687c.jpg"},
    {Id: 2, Name: "Mein zweites Haus", Preis: "125.000", image: "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp"},
    {Id: 3, Name: "Mein drittes Haus", Preis: "100.000", image: "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp"}
  ]
  return (
    <div className="App">
    {houses.map((house) => 
      <Listing key={house.Id} Name={house.Name} Preis={house.Preis} image={house.image}> </Listing>
    ) }

    </div>
  );
}

export default App;
