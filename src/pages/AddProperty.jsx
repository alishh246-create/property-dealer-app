import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddProperty() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    category: '',
    bedrooms: '',
    bathrooms: '',
    image: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.title) newErrors.title = 'Title is required!'
    if (!formData.price) newErrors.price = 'Price is required!'
    if (!formData.location) newErrors.location = 'Location is required!'
    if (!formData.category) newErrors.category = 'Category is required!'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      const savedProperties = JSON.parse(localStorage.getItem('addedProperties') || '[]')
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
      
      const newProperty = {
        id: Date.now(),
        title: formData.title,
        price: formData.price,
        location: formData.location,
        category: formData.category,
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms,
        image: formData.image || 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
        addedBy: loggedInUser.email, 
      }

      savedProperties.push(newProperty)
      localStorage.setItem('addedProperties', JSON.stringify(savedProperties))
      
      setSuccess(true)
      setFormData({ title: '', price: '', location: '', category: '', bedrooms: '', bathrooms: '', image: '' })
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <div className='max-w-2xl mx-auto'>
        <h2 className='text-3xl font-bold text-center text-green-700 mb-6'>Add Property</h2>

        {success && (
          <div className='bg-green-100 border border-green-500 text-green-700 rounded-lg p-4 mb-6 text-center'>
             Property added successfully!
            <button
              onClick={() => navigate('/properties')}
              className='ml-4 bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700'>
              View Properties
            </button>
          </div>
        )}

        <div className='bg-white rounded-xl shadow-lg p-6'>
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>Title</label>
            <input type='text' name='title' value={formData.title} onChange={handleChange}
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500'
              placeholder='e.g. 5 Marla House'/>
            {errors.title && <p className='text-red-500 text-sm mt-1'>{errors.title}</p>}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>Price</label>
            <input type='text' name='price' value={formData.price} onChange={handleChange}
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500'
              placeholder='e.g. 1.5 Cror PKR'/>
            {errors.price && <p className='text-red-500 text-sm mt-1'>{errors.price}</p>}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>Location</label>
            <input type='text' name='location' value={formData.location} onChange={handleChange}
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500'
              placeholder='e.g. DHA Bahawalpur'/>
            {errors.location && <p className='text-red-500 text-sm mt-1'>{errors.location}</p>}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>Category</label>
            <select name='category' value={formData.category} onChange={handleChange}
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500'>
              <option value=''>Select Category</option>
              <option value='house'>House</option>
              <option value='apartment'>Apartment</option>
              <option value='shops'>Shops</option>
            </select>
            {errors.category && <p className='text-red-500 text-sm mt-1'>{errors.category}</p>}
          </div>

          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
              <label className='block text-gray-700 font-bold mb-2'>Bedrooms</label>
              <input type='number' name='bedrooms' value={formData.bedrooms} onChange={handleChange}
                className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500'
                placeholder='e.g. 3'/>
            </div>
            <div>
              <label className='block text-gray-700 font-bold mb-2'>Bathrooms</label>
              <input type='number' name='bathrooms' value={formData.bathrooms} onChange={handleChange}
                className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500'
                placeholder='e.g. 2'/>
            </div>
          </div>

          <div className='mb-6'>
            <label className='block text-gray-700 font-bold mb-2'>Image URL (optional)</label>
            <input type='text' name='image' value={formData.image} onChange={handleChange}
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500'
              placeholder='Paste image URL here'/>
          </div>

          <button onClick={handleSubmit}
            className='w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 font-bold text-lg'>
            Add Property 
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddProperty