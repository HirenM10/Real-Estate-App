import PropertyForm from '../components/PropertyForm'
import { api } from '../api/mockApi'
import { useState } from 'react'
import axios from 'axios'

export default function AddPropertyPage() {
  const [message, setMessage] = useState('')

  const handleAdd = async (property) => {
    try {
      const response = await axios.post("http://localhost:5180/api/properties", property);
      //setProperties(response.data.items);
      //setTotalCount(response.data.totalCount);
    } catch (err) {
      console.error("Error adding property", err);
    }

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
