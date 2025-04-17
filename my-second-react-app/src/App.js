import './App.css';
import {useState} from "react"

function App() {
  // let zahl = 15
  const [zahl, setZahl] = useState(15)

  return (
   <>
   <p>Meine Lieblingszahl ist {zahl}</p>
   <button onClick={() => setZahl(zahl + 1) }>+</button>
   <button onClick={() => setZahl(zahl - 1) }>-</button>
   <button onClick={() => setZahl(0) }>Reset</button>
   
   </>
  );
}

export default App;
