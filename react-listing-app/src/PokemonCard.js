import React from 'react'
import './PokemonCard.css'
import { Link } from 'react-router-dom'

function PokemonCard(props) {
  return (
    <Link style={{textDecoration: "none"}} to={`/pokedex/${props.id}`}>
    <div className='container'>
        <img src={props.image} width={"200px"} ></img>
        <h2>Name: {props.Name}</h2>
        <p>Gewicht: {props.Gewicht}</p>
        <p>Größe: {props.Größe}</p>
        <p>Typ: {props.Typ}</p>
    </div>
    </Link>
  )
}

export default PokemonCard