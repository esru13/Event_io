import React, { useState } from 'react';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);

      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 bg-gradient-to-b from-[#5516DA] to-[#2D0C74] flex flex-col items-center justify-center">
          <img src="/ticket.png" alt="Ticket" className="w-1/4 max-w-[50px] mb-4" />
          <h1 className="text-white text-4xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            EVENTIO
          </h1>
          <p className="text-white text-center text-sm px-12 mb-8">
            Simplifying the way you find, book, and share events all in one place!
          </p>
        </div>
        <div className="w-1/2 bg-white p-8">
          <h2 className="text-xl mb-2 text-center">
            Get Started with <span className="font-extrabold">Eventio!</span>
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">Getting started is easy</p>
          {submitted && <p className="text-green-500 text-center mb-4">Signup successful!</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-xs font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-xs font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-[#5516DA] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#4514B8] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </form>
          <div className="flex justify-center mt-4">
            <p className="text-sm text-black mr-1">Have an account?</p>
            <a href="/" className="text-sm text-[#5516DA] font-semibold">Sign in</a>
          </div>
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500 text-sm">or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="flex space-x-2 mt-4">
            <button className="flex items-center justify-center w-1/3 bg-white border border-gray-300 text-gray-700 py-1 px-3 rounded-md shadow-sm text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <FaGoogle className="w-4 h-4 mr-1" />
              Google
            </button>
            <button className="flex items-center justify-center w-1/3 bg-blue-600 text-white py-1 px-3 rounded-md shadow-sm text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <FaFacebookF className="w-4 h-4 mr-1" />
              Facebook
            </button>
            <button className="flex items-center justify-center w-1/3 bg-black text-white py-1 px-3 rounded-md shadow-sm text-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              <FaApple className="w-4 h-4 mr-1" />
              Apple
            </button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">
            By continuing, you indicate that you have read and agree to the{' '}
            <a href="#" className="text-[#5516DA] underline">
              Terms of Use
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
