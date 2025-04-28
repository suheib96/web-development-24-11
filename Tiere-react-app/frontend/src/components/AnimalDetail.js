import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function AnimalDetail() {
    const {id} = useParams()
    const [tier,setTier] = useState({})
    const navigate = useNavigate()

    async function handleDelete(){
        // await fetch("http://localhost:5005/tiere/"+id,{
        //     method: "DELETE"
        // })
        await axios.delete("http://localhost:5005/tiere/"+id)

        navigate("/list") // navigiert zu /list
        // navigate(-1) / alernativ eine Seite zurück mit -1
        // alert("Erfolgreich gelöscht")
    }
    async function getOneTier(){
            // const res = await fetch("http://localhost:5005/tiere/"+id)
            // const data = await res.json()

            const response = await axios.get("http://localhost:5005/tiere/"+id)
            setTier(response.data)
        }
        useEffect(() => {
            getOneTier()
        }, [id])
        
  return (
    <div>
        <p>Tierart: {tier.tierart}</p>
        <p>Name: {tier.name}</p>
        <p>Krankheit: {tier.krankheit}</p>
        <p>Geburtstag: {tier.geburtstag}</p>
        <p>Gewicht: {tier.gewicht}</p>
        <button onClick={(handleDelete)}>Delete me</button>
        <button onClick={()=> (navigate(`/detail/`+ (parseInt(id)+1)))}>Vorwärts</button>
    </div>
  )
}

export default AnimalDetail