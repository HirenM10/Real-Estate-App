import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../api/mockApi'

export default function DetailPage() {
  const { id } = useParams()
  const [property, setProperty] = useState(null)

  useEffect(() => {
    api.getProperty(id).then(setProperty)
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
