import React, { useState, useEffect } from 'react'
import PropertyCard from '../components/PropertyCard'
import properties from '../data/properties'
import Services from '../components/Services'

function Properties() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [allProperties, setAllProperties] = useState([])

  useEffect(() => {
    const savedProperties = JSON.parse(localStorage.getItem('addedProperties') || '[]')
    setAllProperties([...properties, ...savedProperties])
  }, [])

  const filteredProperties = allProperties
    .filter((property) =>
      property.location.toLowerCase().includes(search.toLowerCase())
    )
    .filter((property) =>
      category === '' ? true : property.category === category
    )

  return (
    <>
      <div className='bg-gray-100 min-h-screen'>
        <div className='max-w-6xl mx-auto p-6'>
          <h2 className='text-2xl font-bold text-green-800 mb-6'>All Properties</h2>
          
          <input
            type='text'
            placeholder='Search by Location...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:border-green-500'
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='w-full border border-gray-300 rounded-lg p-2 mb-6 focus:outline-none focus:border-green-500'>
            <option value=''>All Categories</option>
            <option value='house'>House</option>
            <option value='shops'>Shops</option>
            <option value='apartment'>Apartment</option>
          </select>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                title={property.title}
                price={property.price}
                location={property.location}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                image={property.image}
                addedBy={property.addedBy} 
              />
            ))}
          </div>
        </div>
      </div>
      {/* How It Works Section */}
      <div className='bg-white-100 py-10 mt-10'>
        <div className='max-w-6xl mx-auto p-6'>
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-10'>How It Works</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white rounded-xl shadow-lg p-6 text-center hover:-translate-y-4 transition-transform duration-300 w-60 h-50 flex flex-col justify-center items-center mx-auto'>
              <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-green-600 text-2xl font-bold'>1</span>
              </div>
              <h3 className='text-xl font-bold text-gray-800'>Search Property</h3>
            </div>
            <div className='bg-white rounded-xl shadow-lg p-6 text-center hover:-translate-y-4 transition-transform duration-300 w-60 h-50 flex flex-col justify-center items-center mx-auto'>
              <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-green-600 text-2xl font-bold'>2</span>
              </div>
              <h3 className='text-xl font-bold text-gray-800'>Contact Owner</h3>
            </div>
            <div className='bg-white rounded-xl shadow-lg p-6 text-center hover:-translate-y-4 transition-transform duration-300 w-60 h-50 flex flex-col justify-center items-center mx-auto'>
              <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-green-600 text-2xl font-bold'>3</span>
              </div>
              <h3 className='text-xl font-bold text-gray-800'>Finalize Deal</h3>
            </div>
          </div>
          </div>
          </div>
    </>
  )
}

export default Properties