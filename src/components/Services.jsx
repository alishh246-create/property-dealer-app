import React from 'react'

function Services() {
  return (
    <div className='max-w-2xl mx-auto p-2 mt-10'>
  <h2 className='text-3xl font-bold text-center text-gray-800 mb-10'>Our Services</h2>
  <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4'>
    {[
      
      { name: 'Buy' },
      { name: 'Sell' },
      { name: 'Rent' },
      { name: 'Property Consultation'}
    ].map((cat) => (
      <div
        key={cat.name}
        className='bg-white rounded-xl shadow-md p-4 text-center cursor-pointer hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl hover:bg-green-50 border-2 border-transparent hover:border-green-800'>
        <p className='text-1xl text-gray-700 font-bold'>{cat.name}</p>
      </div>
    ))}
  </div>
</div>
  )
}

export default Services
