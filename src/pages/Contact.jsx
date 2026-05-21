import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaStar } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Name is required!'
    if (!formData.email) newErrors.email = 'Email is required!'
    if (!formData.phone) newErrors.phone = 'Phone is required!'
    if (!formData.subject) newErrors.subject = 'Please select a subject!'
    if (!formData.message) newErrors.message = 'Message is required!'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      setSuccess(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }
  }

  const reviews = [
    { name: 'Ali Hassan', rating: 5, comment: 'Best property dealer in Bahawalpur! Found my dream home in just 2 weeks.' },
    { name: 'Sara Khan', rating: 5, comment: 'Very professional and trustworthy. Highly recommended!' },
    { name: 'Usman Ahmed', rating: 4, comment: 'Great service and amazing properties. Very satisfied!' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className='bg-green-900 py-16 text-center'>
        <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>Contact Us</h1>
        <p className='text-white text-lg max-w-2xl mx-auto px-4'>
          Get in touch with us we are always ready to help you find your dream property.
        </p>
      </div>

      <div className='max-w-6xl mx-auto p-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

          {/* Contact Info */}
          <div>
            <h2 className='text-2xl font-bold text-gray-800 mb-6'>Get In Touch</h2>
            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <div className='bg-green-100 p-4 rounded-full'>
                  <FaPhone className='text-green-600 text-xl'/>
                </div>
                <div>
                  <p className='font-bold text-gray-800'>Phone</p>
                  <p className='text-gray-600'>+92 326 5051996</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='bg-green-100 p-4 rounded-full'>
                  <FaWhatsapp className='text-green-600 text-xl'/>
                </div>
                <div>
                  <p className='font-bold text-gray-800'>WhatsApp</p>
                  <p className='text-gray-600'>+92 326 5051996</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='bg-green-100 p-4 rounded-full'>
                  <FaMapMarkerAlt className='text-green-600 text-xl'/>
                </div>
                <div>
                  <p className='font-bold text-gray-800'>Location</p>
                  <p className='text-gray-600'>Bahawalpur, Punjab, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className='bg-green-50 rounded-xl p-6 mt-8'>
              <h3 className='text-xl font-bold text-gray-800 mb-4'> Working Hours</h3>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Monday - Friday</span>
                  <span className='font-bold text-green-600'>9:00 AM - 6:00 PM</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Saturday</span>
                  <span className='font-bold text-green-600'>10:00 AM - 4:00 PM</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Sunday</span>
                  <span className='font-bold text-red-500'>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white rounded-xl shadow-lg p-6'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6'>Send Message</h2>

            {/* Success Message */}
            {success && (
              <div className='bg-green-100 border border-green-500 text-green-700 rounded-lg p-4 mb-6 text-center'>
                 Thank you! We will contact you soon!
              </div>
            )}

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Name</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500'
                placeholder='Enter your name'
              />
              {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Email</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500'
                placeholder='Enter your email'
              />
              {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Phone</label>
              <input
                type='text'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500'
                placeholder='Enter your phone number'
              />
              {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Subject</label>
              <select
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500'>
                <option value=''>Select Subject</option>
                <option value='buy'>Buy Property</option>
                <option value='sell'>Sell Property</option>
                <option value='rent'>Rent Property</option>
                <option value='consultation'>Property Consultation</option>
              </select>
              {errors.subject && <p className='text-red-500 text-sm mt-1'>{errors.subject}</p>}
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Message</label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500'
                rows='4'
                placeholder='Enter your message'
              />
              {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message}</p>}
            </div>

            <button
              onClick={handleSubmit}
              className='w-full bg-green-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 font-bold text-lg'>
              Send Message 
            </button>
          </div>

        </div>
      </div>

      {/* Customer Reviews */}
      <div className='bg-gray-100 py-12 mt-6'>
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-10'> Customer Reviews</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {reviews.map((review, index) => (
              <div key={index} className='bg-white rounded-xl shadow-lg p-6 hover:-translate-y-2 transition-transform duration-300'>
                <div className='flex gap-1 mb-3'>
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className='text-yellow-400'/>
                  ))}
                </div>
                <p className='text-gray-600 italic'>"{review.comment}"</p>
                <p className='text-green-600 font-bold mt-4'>— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact