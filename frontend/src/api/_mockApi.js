let properties = [
  {
    id: 1,
    name: "Sunset Apartments",
    type: "Apartment",
    price: 500000,
    spaces: [
      { id: 1, type: "1BHK", size: 600 },
      { id: 2, type: "2BHK", size: 900 }
    ]
  },
  {
    id: 2,
    name: "Green Villas",
    type: "Villa",
    price: 1200000,
    spaces: [
      { id: 3, type: "3BHK", size: 1500 },
      { id: 4, type: "4BHK", size: 2000 }
    ]
  }
]

export const api = {
  getProperties: async (filters = {}) => {
    await new Promise(r => setTimeout(r, 300))
    let result = properties
    if (filters.type) result = result.filter(p => p.type === filters.type)
    if (filters.min_price) result = result.filter(p => p.price >= filters.min_price)
    if (filters.max_price) result = result.filter(p => p.price <= filters.max_price)
    return result
  },

  getProperty: async (id) => {
    await new Promise(r => setTimeout(r, 300))
    return properties.find(p => p.id === parseInt(id))
  },

  createProperty: async (data) => {
    await new Promise(r => setTimeout(r, 300))
    const newProp = { id: properties.length + 1, ...data }
    properties.push(newProp)
    return newProp
  },

  getStats: async () => {
    await new Promise(r => setTimeout(r, 200))
    const allSpaces = properties.flatMap(p => p.spaces)
    const avgSize = allSpaces.reduce((a,b)=>a+b.size,0)/allSpaces.length
    return { avgSize }
  }
}
