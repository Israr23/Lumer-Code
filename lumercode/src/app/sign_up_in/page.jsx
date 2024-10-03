'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import signUpInImg from '/src/app/public/signup.png'
import { useState } from 'react'

function SignUpIn() {
  const searchParams = useSearchParams()

  const type = searchParams.get('type')
  console.log('type:', type)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const apiEnd = type == 'in' ? '/api/auth/login' : '/api/auth/signup'
    const res = await fetch(apiEnd, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    console.log(res, 'res')
    if (type == 'in') {
      if (res.ok) {
        const { token } = await res.json()
        localStorage.setItem('token', token) // Store token in local storage
        alert('Login successful!')
        window.location.href = '/dashboard'
      } else {
        alert('Invalid credentials')
      }
    } else {
      if (res.ok) {
        alert('Sign-up successful!')
      } else {
        alert('Error during sign-up', res)
      }
    }
  }

  return (
    <div className="flex h-screen">
      {/* Left Side - Form Section */}
      <div className="w-1/2 flex items-center justify-center bg-gray-50 p-10">
        <div className="max-w-sm w-full space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Join the green movement
          </h1>
          {type == 'in' && (
            <p className="text-gray-500">Login to your account</p>
          )}

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="brian@example.com"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Continue Button */}
          <button
            className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            onClick={handleSubmit}
          >
            Continue with email
          </button>

          <p className="text-xs text-gray-400">
            By clicking "Continue with email" you agree to our User Terms of
            Service and Privacy Policy
          </p>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="w-1/2 bg-green-50 flex items-center justify-center">
        <Image
          src={signUpInImg}
          alt="Green Movement"
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}
export default SignUpIn
