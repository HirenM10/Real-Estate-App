import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function DetailPage() {
  const { id } = useParams()
  const [property, setProperty] = useState(null)

  useEffect(() => {
    //api.getProperty(id).then(setProperty)
    const fetchProperty = async () => {
        try {
            const response = await axios.get(`http://localhost:5180/api/properties/${id}`)
            setProperty(response.data) // <-- single property, not .items
        } catch (err) {
            console.error("Error fetching property", err)
        }
    }
 
    fetchProperty()
}, [id])

  if (!property) return <p>Loading...</p>

  return (
    <div>
      <h1 className="text-2xl font-bold">{property.name}</h1>
      <p className="text-gray-600">{property.address}</p>
      <p className="mt-2">{property.description}</p>
      <p className="mt-4">Type: {property.type}</p>
      <p>Price: ${property.price.toLocaleString()}</p>
      
      <h2 className="font-bold mt-4">Spaces</h2>
      <ul className="list-disc pl-6">
        {property.spaces.map(s => (
          <li key={s.id}>{s.type} - {s.size} sqft</li>
        ))}
      </ul>
    </div>
  )
}
