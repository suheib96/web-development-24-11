import './App.css';
import {useState} from "react"

function App() {
  // let zahl = 15
  const [zahl, setZahl] = useState(15)
  const [colour, setColour] = useState("red")

  function reset(){
    setZahl(0)
  }
  
  return (
   <>
   <p>Meine Lieblingszahl ist {zahl}</p>

   <button onClick={() => setZahl(zahl + 1) }>+</button>
   <button onClick={() => setZahl(zahl - 1) }>-</button>
   <button onClick={reset}>Reset</button>

   <h1 style={{color: colour}}>Ich bin eine Überschrift</h1>
   <button onClick={() => setColour("blue")}>Ändere die Farbe zu blau</button>
   <button onClick={() => setColour("green")}>Ändere die Farbe zu grün</button>
   </>
  );
}

export default App;
