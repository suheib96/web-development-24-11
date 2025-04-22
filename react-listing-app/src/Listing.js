function Listing(props) {
  return (
    <div>
      <img
        width="300px"
        src={props.image}
      ></img>
      <h2>{props.Name}</h2>
      <h2>Preis: {props.Preis}€</h2>
    </div>
  );
}

export default Listing;
