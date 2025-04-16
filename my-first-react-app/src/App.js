import logo from './logo.svg';
import './App.css';

function App() {
  const zahl = 15
  const name = "Suheib"
  const element = <h3>Hallo aus dem H3 Tag</h3>

  const meinStil = {backgroundColor: "blue", fontSize: "10px"} // dieser Stil könnte als Variable übergeben werden an einem Style Attribut
  function addieren(a,b){
    return a + b
  }
  return (
    // <>...</> -> Fragment
    <> 

{/* Attribute werden in CamelCase Schreibweise geschrieben in JSX 
styles müssen als Javascript Objekte übergeben werden, daher kommt die {{}} schreibweise zustande*/}
    <h1 style={{backgroundColor: "blue", fontSize: "50px"}}>Hier eine Berechnung {zahl * 5}</h1>
    <p>Hallo aus dem P tag</p>
    <h2>Hallo lieber {name}</h2>
    {element}

    <h3> Hier eine weitere Berechnung {addieren(7,12)}</h3>

    </>
  );
}

export default App;
