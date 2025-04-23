import React from 'react'
import './PokemonCard.css'

function PokemonCard(props) {
  return (
    <div className='container'>
        <img src={props.image} width={"200px"}></img>
        <h2>Name: {props.Name}</h2>
        <p>Gewicht: {props.Gewicht}</p>
        <p>Größe: {props.Größe}</p>
        <p>Typ: {props.Typ}</p>
    </div>
  )
}

export default PokemonCard