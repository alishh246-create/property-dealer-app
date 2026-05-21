import React from 'react'
import myPic from '../assets/myPic.jpeg'

function About() {
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className='bg-green-900 py-16 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>About Us</h1>
          <p className='text-white text-lg md:text-xl max-w-2xl mx-auto px-4'>
            Your most trusted property dealer in Bahawalpur helping families find their dream houses since 2010.
          </p>
        </div>
        {/* Our Story */}
        <div className='max-w-4xl mx-auto p-8 mt-10'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>Our Story</h2>
          <p className='text-gray-600 text-lg leading-relaxed'>
            PropFinder was founded with one simple mission to make property buying, selling, and renting easy and transparent for everyone in Bahawalpur. Over the years, we have helped hundreds of families find their perfect home at the best prices.
          </p>
        </div>

        {/* Stats */}
        <div className='max-w-4xl mx-auto px-8'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='bg-green-300 rounded-xl p-4 text-center hover:-translate-y-2 transition-transform duration-300'>
              <h2 className='text-3xl font-bold text-green-700'>100+</h2>
              <p className='text-gray-700 mt-2'>Properties Listed</p>
            </div>
            <div className='bg-green-300 rounded-xl p-4 text-center hover:-translate-y-2 transition-transform duration-300'>
              <h2 className='text-3xl font-bold text-green-700'>500+</h2>
              <p className='text-gray-700 mt-2'>Happy Customers</p>
            </div>
            <div className='bg-green-300 rounded-xl p-4 text-center hover:-translate-y-2 transition-transform duration-300'>
              <h2 className='text-3xl font-bold text-green-700'>10+</h2>
              <p className='text-gray-700 mt-2'>Years Experience</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className='bg-gray-100 py-12 mt-10'>
          <div className='max-w-6xl mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center text-gray-800 mb-10'>Meet Our Team</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto'>
              <div className='bg-white rounded-xl shadow-lg p-6 text-center hover:-translate-y-2 transition-transform duration-300'>
                <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-4xl'>👨‍💼</span>
                </div>
                <h3 className='text-xl font-bold text-gray-800'>Abdul Hameed</h3>
                <p className='text-green-600 font-semibold'>CEO & Founder</p>
                <p className='text-gray-500 mt-2 text-sm'>15+ years of experience in real estate</p>
              </div>
              <div className='bg-white rounded-xl shadow-lg p-6 text-center hover:-translate-y-2 transition-transform duration-300'>
                <img src={myPic} alt="Alisha Hameed" className='w-30 h-40 object-cover mx-auto mb-4'/>
                <h3 className='text-xl font-bold text-gray-800'>Alisha Hameed</h3>
                <p className='text-green-600 font-semibold'>Property Manager</p>
                <p className='text-gray-500 mt-2 text-sm'>Expert in residential properties</p>
              </div>
            </div>
          </div>
        </div>

        <p className='text-black text-xl mt-6 mb-6 text-center font-semibold'>We are helping to find your Dream House!</p>

      </div>
    </>
  )
}

export default About