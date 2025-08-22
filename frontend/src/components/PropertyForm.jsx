import { useState } from 'react'

export default function PropertyForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', type: '', price: '', address: '', description: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.type || !form.price || !form.address || !form.description) {
      setError('All fields are required.')
      return
    }
    setError('')
    onSubmit({ ...form, price: parseInt(form.price), spaces: [] })
    setForm({ name: '', type: '', price: '', address: '', description: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Property Name" className="p-2 border rounded" />
      <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="p-2 border rounded" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="p-2 border rounded"></textarea>
      <select name="type" value={form.type} onChange={handleChange} className="p-2 border rounded">
        <option value="">Select Type</option>
        <option>Apartment</option>
        <option>Villa</option>
      </select>
      <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" className="p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">Add</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}
