import { useEffect, useState } from 'react'
import axios from 'axios'
import { api } from '../api/mockApi'
import PropertyCard from '../components/PropertyCard'
import Pagination from '../components/Pagination'
import { Link } from 'react-router-dom'
 
export default function SearchPage() {
  const [filters, setFilters] = useState({ type: '', minPrice: '', maxPrice: '' })
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
    <div className="p-6 max-w-7xl mx-auto">
<h1 className="text-3xl font-bold mb-6 text-gray-800">Properties</h1>
 
    {/* Filters */}
<div className="flex flex-wrap gap-3 mb-6">
<select
            name="type"
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="p-2 border rounded shadow-sm hover:border-blue-500 transition"
>
<option value="0" selected>All Types</option>
<option value="1">House</option>
<option value="2">Apartment</option>
<option value="3">Condo</option>
</select>
 
        <input
            type="number"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
            className="p-2 border rounded shadow-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
        />
 
        <input
            type="number"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            className="p-2 border rounded shadow-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
        />
</div>
 
    {loading ? (
<div className="flex justify-center items-center py-20">
<div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-gray-200"></div>
</div>
    ) : (
<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((p) => (
<li
                    key={p.id}
                    className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:border-blue-500 transition-all duration-300 p-5"
>
<h2 className="font-bold text-xl mb-2 text-gray-800">{p.name}</h2>
<p className="text-gray-600 mb-1">Type: {p.type}</p>
<p className="text-gray-600 font-semibold">Price: ${p.price}</p>
<Link
                        to={`/properties/${p.id}`}
                        className="text-blue-600 underline mt-3"
                        aria-label={`View details for ${p.name}`}
>
                        View Details
</Link>
</li>
            ))}
</ul>
    )}
 
    {/* Pagination */}
<div className="flex justify-center mt-8 gap-4">
<button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 transition"
>
            Prev
</button>
<span className="flex items-center text-gray-700">
            Page {page} of {totalPages}
</span>
<button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 transition"
>
            Next
</button>
</div>
 
    {stats && (
<p className="mt-6 text-gray-700 font-medium">
            📊 Average Space Size: {stats.avgSize.toFixed(2)} sqft
</p>
    )}
</div>
  );
}