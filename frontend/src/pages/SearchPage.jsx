import { useEffect, useState } from 'react'
import axios from 'axios'
import { api } from '../api/mockApi'
import PropertyCard from '../components/PropertyCard'
import Pagination from '../components/Pagination'

export default function SearchPage() {
  const [filters, setFilters] = useState({ type: '', minPrice: 10, maxPrice: 1000000000 })
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(false)
  const [stats, setStats] = useState(null)
  const [page, setPage] = useState(1)
  const [pageSize] = useState(9);
  const [totalCount, setTotalCount] = useState(0);
  //const itemsPerPage = 2

  useEffect(() => {
    loadProperties()
    api.getStats().then(setStats)
  }, [filters, page])

  const loadProperties = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5180/api/properties", {
        params: {
          type: filters.type || undefined,
          minPrice: filters.minPrice|| undefined,
          maxPrice: filters.maxPrice || undefined,
          page,
          pageSize
        },
      });
      setProperties(response.data.items);
      setTotalCount(response.data.totalCount);
    } catch (err) {
      console.error("Error fetching properties", err);
    } finally {
      setLoading(false);
    }
  }

  const totalPages = Math.ceil(totalCount / pageSize);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  //const paginated = properties.slice((page-1)*itemsPerPage, page*itemsPerPage)

   return (
    <div>
      <h1 className="text-xl font-bold mb-4">Properties</h1>

      {/* Simple filter form */}
      <div className="flex gap-2 mb-4">
        
        <select name="type" value={filters.type} onChange={(e) => setFilters({ ...filters, type: e.target.value })} className="p-2 border rounded">
          <option value="-1">All Types</option>
          <option value="0">House</option>
          <option value="1">Apartment</option>
          <option value="2">Condo</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          className="border p-2"
        />
        <button
          onClick={() => setPage(1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Apply Filters
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {properties.map((p) => (
            <li key={p.id} className="border p-4 rounded shadow">
              <h2 className="font-bold">{p.name}</h2>
              <p>Type: {p.type}</p>
              <p>Price: ${p.price}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}