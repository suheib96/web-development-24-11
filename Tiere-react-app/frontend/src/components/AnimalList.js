import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AnimalList() {

    const [tiere, setTiere] = useState([])

    async function getAllTiere(){
        const res = await fetch("http://localhost:5005/tiere")
        const data = await res.json()
        setTiere(data)
    }
    useEffect(() => {
        getAllTiere()
    }, [])
  return (
    <div>
        {tiere.map((tier) => (
            <Link to={`/detail/${tier.id}`}>
                <p> {tier.tierart} - {tier.name}</p>
                </Link>
        ))}
        </div>
  )
}

export default AnimalList