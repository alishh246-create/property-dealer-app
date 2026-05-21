import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.email) newErrors.email = 'Email is required!'
    if (!formData.password) newErrors.password = 'Password is required!'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      )
      if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user))
        navigate('/')
      } else {
        setErrors({ general: 'Invalid email or password!' })
      }
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-6'>
      <div className='bg-white rounded-xl shadow-lg p-8 w-full max-w-md'>
        <h2 className='text-3xl font-bold text-center text-green-700 mb-6'>Login</h2>

        {errors.general && (
          <div className='bg-red-100 border border-red-400 text-red-600 rounded-lg p-3 mb-4 text-center'>
            {errors.general}
          </div>
        )}

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

        <div className='mb-6'>
          <label className='block text-gray-700 font-bold mb-2'>Password</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500'
            placeholder='Enter your password'
          />
          {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
        </div>

        <button
          onClick={handleSubmit}
          className='w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 font-bold text-lg'>
          Login
        </button>

        <p className='text-center text-gray-600 mt-4'>
          Don't have an account?{' '}
          <Link to='/signup' className='text-green-600 font-bold hover:underline'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login