import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

function PokemonList() {
  const urlListe = [];
  const pokemonListe = [];
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
      .then((res) => res.json())
      .then((data) => {
        data.results.forEach((element) => {
          urlListe.push(element.url);
        });
      })
      .then(() => {
        urlListe.forEach((url) => {
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              setPokemons((pokemonListe) => [...pokemonListe, data]);
            });
        });
      });
  },[]);
  


  return (
        <>
        <Link to="/">Häuser</Link>
    <div className="containerList">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          image={pokemon.sprites.front_default}
          Name={pokemon.name}
          Gewicht={pokemon.weight}
          Größe={pokemon.height}
          Typ={pokemon.types[0].type.name}
        ></PokemonCard>
      ))}
    </div>
    </>
  );
}

export default PokemonList;
