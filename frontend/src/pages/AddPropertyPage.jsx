import PropertyForm from '../components/PropertyForm'
import { api } from '../api/mockApi'
import { useState } from 'react'

export default function AddPropertyPage() {
  const [message, setMessage] = useState('')

  const handleAdd = async (property) => {
    await api.createProperty(property)
    setMessage('Property added successfully!')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Property</h1>
      <PropertyForm onSubmit={handleAdd} />
      {message && <p className="mt-2">{message}</p>}
    </div>
  )
}
