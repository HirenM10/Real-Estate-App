import { Link } from 'react-router-dom'

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="font-bold text-lg">{property.name}</h2>
      <p className="text-sm text-gray-600">{property.address}</p>
      <p className="text-gray-700 mt-1">{property.description?.slice(0, 60)}...</p>
      <p>Type: {property.type}</p>
      <p>Price: ${property.price.toLocaleString()}</p>
      <p>Spaces: {property.spaces.length}</p>
      <Link 
        to={`/properties/${property.id}`} 
        className="text-blue-600 underline"
        aria-label={`View details for ${property.name}`}
      >
        View Details
      </Link>
    </div>
  )
}
