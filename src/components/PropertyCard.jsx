import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PropertyCard({ image, location, title, price, bedrooms, bathrooms, id, addedBy }) {
  const navigate = useNavigate()
  const [loggedInUser, setLoggedInUser] = useState(null)

  const ADMIN_EMAIL = 'alishh246@gmail.com' 

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'))
    setLoggedInUser(user)
  }, [])

  const handleDelete = () => {
    const savedProperties = JSON.parse(localStorage.getItem('addedProperties') || '[]')
    const updated = savedProperties.filter((p) => p.id !== id)
    localStorage.setItem('addedProperties', JSON.stringify(updated))
    window.location.reload()
  }

  const canDelete = loggedInUser && (
    loggedInUser.email === ADMIN_EMAIL ||
    loggedInUser.email === addedBy
  )

  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
      <img src={image} alt={title} className='w-full h-48 object-cover'/>
      <div className='p-4'>
        <h2 className='text-xl text-center font-bold text-gray-800'>{title}</h2>
        <p className='text-green-600 text-lg font-bold mt-1'>{price}</p>
        <p className='text-gray-600 text-right mt-1'>{location}</p>
        <button
          onClick={() => navigate(`/property/${id}`)}
          className='mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors duration-300'>
          View Details
        </button>

        {canDelete && addedBy && (
          <button
            onClick={handleDelete}
            className='mt-2 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 transition-colors duration-300'>
             Delete
          </button>
        )}
      </div>
    </div>
  )
}

export default PropertyCard