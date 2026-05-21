import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const navigate = useNavigate()
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'))
    setLoggedInUser(user)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setLoggedInUser(null)
    navigate('/')
  }

  return (
    <div>
      <nav className='bg-green-900 p-5 flex justify-between items-center'>
        {/* Logo */}
        <h1 className='text-white font-bold text-2xl'> Property Finder</h1>

        <button
          className='text-white text-2xl md:hidden'
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8 items-center'>
          <li><Link className='text-white font-bold hover:text-yellow-300 hover:-translate-y-2 transition-transform duration-300 inline-block' to='/'>Home</Link></li>
          <li><Link className='text-white font-bold hover:text-yellow-300 hover:-translate-y-2 transition-transform duration-300 inline-block' to='/properties'>Properties</Link></li>
          <li><Link className='text-white font-bold hover:text-yellow-300 hover:-translate-y-2 transition-transform duration-300 inline-block' to='/about'>About</Link></li>
          <li><Link className='text-white font-bold hover:text-yellow-300 hover:-translate-y-2 transition-transform duration-300 inline-block' to='/contact'>Contact</Link></li>

          {loggedInUser ? (
            <>
              <li className='text-yellow-300 font-bold'>Welcome {loggedInUser.name}</li>
              <li>
                <button onClick={() => navigate('/add-property')}
                  className='bg-yellow-300 text-green-900 font-bold px-4 py-2 rounded-lg hover:bg-white transition-colors duration-300'>
                  Add Property
                </button>
              </li>
              <li>
                <button onClick={handleLogout}
                  className='bg-red-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300'>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <button onClick={() => navigate('/login')}
                className='bg-white text-green-700 font-bold px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors duration-300'>
                Login
              </button>
            </li>
          )}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='bg-green-800 md:hidden flex flex-col gap-4 p-6'>
          <Link onClick={() => setMenuOpen(false)} className='text-white font-bold hover:text-yellow-300' to='/'>Home</Link>
          <Link onClick={() => setMenuOpen(false)} className='text-white font-bold hover:text-yellow-300' to='/properties'>Properties</Link>
          <Link onClick={() => setMenuOpen(false)} className='text-white font-bold hover:text-yellow-300' to='/about'>About</Link>
          <Link onClick={() => setMenuOpen(false)} className='text-white font-bold hover:text-yellow-300' to='/contact'>Contact</Link>

          {loggedInUser ? (
            <>
              <p className='text-yellow-300 font-bold'>Welcome {loggedInUser.name}</p>
              <button onClick={() => { navigate('/add-property'); setMenuOpen(false) }}
                className='bg-yellow-300 text-green-900 font-bold px-4 py-2 rounded-lg'>
                Add Property
              </button>
              <button onClick={handleLogout}
                className='bg-red-500 text-white font-bold px-4 py-2 rounded-lg'>
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => { navigate('/login'); setMenuOpen(false) }}
              className='bg-white text-green-700 font-bold px-4 py-2 rounded-lg'>
              Login
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar