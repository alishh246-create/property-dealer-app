import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Name is required!'
    if (!formData.email) newErrors.email = 'Email is required!'
    if (!formData.password) newErrors.password = 'Password is required!'
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match!'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const existingUser = users.find((u) => u.email === formData.email)
      if (existingUser) {
        setErrors({ email: 'Email already exists!' })
      } else {
        users.push({ name: formData.name, email: formData.email, password: formData.password })
        localStorage.setItem('users', JSON.stringify(users))
        alert('Account created successfully! Please login.')
        navigate('/login')
      }
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-6'>
      <div className='bg-white rounded-xl shadow-lg p-8 w-full max-w-md'>
        <h2 className='text-3xl font-bold text-center text-green-700 mb-6'>Sign Up</h2>

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

        <div className='mb-6'>
          <label className='block text-gray-700 font-bold mb-2'>Confirm Password</label>
          <input
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500'
            placeholder='Confirm your password'
          />
          {errors.confirmPassword && <p className='text-red-500 text-sm mt-1'>{errors.confirmPassword}</p>}
        </div>

        <button
          onClick={handleSubmit}
          className='w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 font-bold text-lg'>
          Sign Up
        </button>

        <p className='text-center text-gray-600 mt-4'>
          Already have an account?{' '}
          <Link to='/login' className='text-green-600 font-bold hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup