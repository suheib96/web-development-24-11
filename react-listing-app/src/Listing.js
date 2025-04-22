import { Link } from "react-router-dom";
import "./Listing.css";
function Listing(props) {
  return (
    <div className="listing-tile">
      <img width="300px" src={props.image}></img>
      <h2>{props.Name}</h2>
      <h2>Preis: {props.Preis}€</h2>
      <Link to="/contact">Leite mich weiter auf die Kontakt Seite</Link>
    </div>
  );
}

export default Listing;
