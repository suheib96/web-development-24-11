import { Link } from "react-router-dom";
import "./Listing.css";
function Listing(props) {
  let isAdmin = true;
  
  return (
    <div className="listing-tile">
      <img width="300px" src={props.image}></img>
      <h2>{props.Name}</h2>
      <h2>Preis: {props.Preis}€</h2>
      <Link to="/contact">Leite mich weiter auf die Kontakt Seite</Link>

      {props.verfügbarkeit ? (
        <h3 style={{ color: "green" }}>Verfügbar</h3>
      ) : (
        <h3 style={{ color: "red" }}>Nicht Verfügbar</h3>
      )}

      {props.reserviert ? (
        <h4 style={{ color: "orange" }}>Reserviert</h4>
      ) : (
        <h4 style={{ color: "green" }}>Nicht Reserviert</h4>
      )}

      {isAdmin && <button>Delete button</button>}
    </div>
  );
}

export default Listing;
