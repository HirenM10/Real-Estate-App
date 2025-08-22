import { Routes, Route, Link } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import DetailPage from './pages/DetailPage'
import AddPropertyPage from './pages/AddPropertyPage'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-blue-600 p-4 text-white flex justify-between">
        <Link to="/" className="font-bold">🏠 Real Estate</Link>
        <nav>
          <Link to="/" className="mr-4">Search</Link>
          <Link to="/add">Add Property</Link>
        </nav>
      </header>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/properties/:id" element={<DetailPage />} />
          <Route path="/add" element={<AddPropertyPage />} />
        </Routes>
      </main>
    </div>
  )
}
