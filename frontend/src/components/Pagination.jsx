export default function Pagination({ total, perPage, page, setPage }) {
  const totalPages = Math.ceil(total / perPage)
  if (totalPages <= 1) return null

  return (
    <div className="flex gap-2 mt-4">
      <button onClick={()=>setPage(page-1)} disabled={page===1} className="px-3 py-1 border rounded disabled:opacity-50">Prev</button>
      <span>Page {page} of {totalPages}</span>
      <button onClick={()=>setPage(page+1)} disabled={page===totalPages} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
    </div>
  )
}
