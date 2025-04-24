import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";


function Pokedex() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    async function getPokemonDetails() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);
    }
    
    getPokemonDetails();
  }, []);

  if (!pokemon){
    return <p></p>
  }
  return (
    <div>
        <img src={pokemon.sprites.front_default} width="500px"></img>
        {/* <audio src={pokemon.cries.latest} controls></audio> */}

    <button onClick={() => {new Audio(pokemon.cries.latest).play()}}>▶️</button>
      <h1>{pokemon.name}</h1>
      <h2>{pokemon.id}</h2>
      <h2>{pokemon.weight}</h2>
    </div>
  );
}

export default Pokedex;
