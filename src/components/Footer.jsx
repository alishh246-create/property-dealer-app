import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-green-900 text-white mt-10'>
      <div className='max-w-6xl mx-auto p-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>

          {/* Logo & About */}
          <div>
            <h2 className='text-2xl font-bold text-white mb-4'>PropFinder</h2>
            <p className='text-white-400 mb-4'>Your trusted property dealer in Bahawalpur. Find your dream home with us!</p>
            {/* Social Media Icons */}
            <div className='flex gap-4'>
              <a href='#' className='text-white hover:text-yellow-300 transition-colors duration-300 text-2xl'>
                <FaFacebook />
              </a>
              <a href='#' className='text-white hover:text-yellow-300 transition-colors duration-300 text-2xl'>
                <FaInstagram />
              </a>
              <a href='#' className='text-white hover:text-yellow-300 transition-colors duration-300 text-2xl'>
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><Link to='/' className='text-white hover:text-yellow-300 font-bold transition-colors duration-300 hover:-translate-y-2 transition-transform duration-300 inline-block'>Home</Link></li>
              <li><Link to='/properties' className='text-white hover:text-yellow-300 font-bold transition-colors duration-300 hover:-translate-y-2 transition-transform duration-300 inline-block'>Properties</Link></li>
              <li><Link to='/about' className='text-white hover:text-yellow-300 font-bold transition-colors duration-300 hover:-translate-y-2 transition-transform duration-300 inline-block'>About</Link></li>
              <li><Link to='/contact' className='text-white hover:text-yellow-300 font-bold transition-colors duration-300 hover:-translate-y-2 transition-transform duration-300 inline-block'>Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Contact Us</h3>
            <ul className='space-y-2 text-white-400'>
              <li>⟟ Bahawalpur,</li>
              <li>☏ 03265051996</li>
              <li>✉︎ propfinder@gmail.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Newsletter</h3>
            <p className='text-white-400 mb-3'>Subscribe to get latest property updates!</p>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full p-2 rounded-lg text-gray-800 mb-2 focus:outline-none'
            />
            <button className='h-11 bg-white text-black font-bold px-8 py-3 rounded-lg  hover:bg-red-600 hover:text-white transition-colors duration-300'>
              Subscribe
            </button>
          </div>

        </div>

        {/* Google Map */}
        <div className='mt-10'>
          <h3 className='text-xl font-bold mb-4'>Find Us</h3>
          <iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  className='rounded-xl w-full'
></iframe>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-600 mt-8 pt-6 text-center text-gray-400'>
          <p>© 2026 PropFinder All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer