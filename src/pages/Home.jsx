import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom'
import Services from '../components/Services'
import properties from '../data/properties'
import PropertyCard from '../components/PropertyCard'

function Home() {
  const navigate = useNavigate()
  const [category, setCategory] = useState('')
  const filteredByCategory = category === '' ? [] : properties.filter((property) =>
  property.category === category
)
  return (
    <div>
      
      {/* Hero Section */}
      <div
        className='relative min-h-screen flex flex-col justify-center items-center text-center p-6'
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/18273285/pexels-photo-18273285.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: 'center',
        }}
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative z-10'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
            Find Your Dream Home
          </h1>
          <p className='text-white text-lg md:text-2xl mb-8'>
            Best properties in Bahawalpur at the best prices!
          </p>
          <button
            onClick={() => navigate('/properties')}
            className='bg-white text-black font-bold px-8 py-3 rounded-lg text-xl hover:bg-red-600 hover:text-white transition-colors duration-300'>
            View Properties
          </button>
        </div>
      </div>
      {/* Property Categories Section */}
      <div className='max-w-2xl mx-auto p-6 mt-10'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>Property Categories</h2>
        <div className='relative'>
          <select value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='w-full appearance-none bg-white border-2 border-green-500 rounded-xl p-4 text-gray-700 font-semibold text-lg cursor-pointer focus:outline-none focus:border-green-700 shadow-lg'>
            <option value=''>Select Property Type</option>
            <option value='house'>House</option>
            <option value='shops'>Shops</option>
            <option value='apartment'>Apartment</option>

          </select>
          <div className='absolute right-4 top-5 text-green-600 text-xl pointer-events-none'>▼</div>
        </div>
      </div>
      {/* Filtered Cards */}
      <div className='max-w-6xl mx-auto p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredByCategory.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              title={property.title}
              price={property.price}
              location={property.location}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              image={property.image}
            />
          ))}
        </div>
      </div>
      <Services/>

      {/* Why Choose Section */}
      <div className='max-w-6xl mx-auto p-6 mt-10'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>Why Choose Us?</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white rounded-xl shadow-lg p-6 text-center'>
            <p className='text-4xl mb-2'>🤜🤛</p>
            <h3 className='text-xl font-bold text-gray-800'>Trusted Property Listings</h3>
            <p className='text-gray-700 mt-2'>Find verified properties with complete details, clear images, and accurate pricing.</p>
          </div>
          <div className='bg-white rounded-xl shadow-lg p-6 text-center'>
            <p className='text-3xl mb-2'>🧐</p>
            <h3 className='text-xl font-bold text-gray-800'>Easy & Fast Search</h3>
            <p className='text-gray-700 mt-2'>Search properties by location, price, and property type within seconds.</p>
          </div>
          <div className='bg-white rounded-xl shadow-lg p-6 text-center'>
            <p className='text-2xl mb-2'>🔔</p>
            <h3 className='text-xl font-bold text-gray-800'>24/7 Customer Support</h3>
            <p className='text-gray-700 mt-2'>Our support team is always ready to help buyers, sellers, and renters.</p>
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

    </div>
  )
}

export default Home