import './App.css';
import {useEffect, useState} from "react"

function App() {
  // let zahl = 15
  const [zahl, setZahl] = useState(15)
  const [colour, setColour] = useState("red")

// useEffect(() => {}, []) Grundgerüst von useEffect -> [] - Dependency Array
// useEffect führt ein Nebeneffekt aus

// useEffect wird beim initalen Render ausgeführt & wenn sich etwas aus dem 
// Dependeny Array verändert
useEffect(() => {
  console.log("hallo ich komme aus dem UseEffect")
}, [zahl])

  function reset(){
    setZahl(0)
  }
  
  function changeToBlue(){
    setColour("blue")
  }
  return (
   <>
   <p>Meine Lieblingszahl ist {zahl}</p>

   <button onClick={() => setZahl(zahl + 1) }>+</button>
   <button onClick={() => setZahl(zahl - 1) }>-</button>
   <button onClick={reset}>Reset</button>

   <h1 style={{color: colour}}>Ich bin eine Überschrift</h1>
   {/* Zwei Möglichkeiten wie wir die Funktion aufrufen können. */}
   <button onClick={changeToBlue}>Ändere die Farbe zu blau</button>
   <button onClick={() => setColour("green")}>Ändere die Farbe zu grün</button>
   </>
  );
}

export default App;
