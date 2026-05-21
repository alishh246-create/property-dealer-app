import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import properties from '../data/properties'

function PropertyDetail() {
    const navigate = useNavigate()
    const { id } = useParams()
    const property = properties.find((p) => p.id === Number(id))
return (
    <div className='max-w-6xl mx-auto p-4 md:p-8'>
      <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
        
        {/* Large Image */}
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-64 md:h-96 object-cover"
        />

        <div className='p-6'>
          {/* Title and Price */}
          <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
            <h2 className='text-2xl md:text-4xl font-bold text-gray-800'>{property.title}</h2>
            <p className='text-2xl md:text-3xl font-bold text-green-600 mt-2 md:mt-0'>{property.price}</p>
          </div>

          {/* Location */}
          <p className='text-gray-500 text-lg mt-3'> {property.location}</p>

          {/* Beds and Baths */}
          <div className='flex gap-6 mt-4'>
            <div className='bg-green-50 rounded-lg p-4 text-center flex-1'>
              <p className='text-2xl font-bold text-green-600'> {property.bedrooms}</p>
              <p className='text-gray-500 mt-1'>Bedrooms</p>
            </div>
            <div className='bg-green-50 rounded-lg p-4 text-center flex-1'>
              <p className='text-2xl font-bold text-green-600'> {property.bathrooms}</p>
              <p className='text-gray-500 mt-1'>Bathrooms</p>
            </div>
          </div>

          {/* Back Button */}
          <button 
            onClick={() => window.history.back()} 
            className='mt-6 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 w-full md:w-auto'>
            Back to Properties
          </button>
          <button
  onClick={() => navigate('/contact')}
  className='mt-6 ml-4 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 w-full md:w-auto'>
  Contact For More!
</button>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetail