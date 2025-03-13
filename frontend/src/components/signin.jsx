import React, { useState } from 'react';
import Signlogo from "../assets/suvidhasharelogo.png";

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);



  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      
      const response = await fetch('/api/signin', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Sign-in successful
        console.log('Sign-in successful:', data);
        // Store token, redirect, etc.
        localStorage.setItem('authToken', data.token); //Example of storing token
        window.location.href = '/dashboard'; // Example redirect
      } else {
        // Sign-in failed
        setError(data.message || 'Sign-in failed. Please check your credentials.');
      }
    } catch (err) {
      console.error('Sign-in error:', err);
      setError('An error occurred during sign-in. Please try again.');
    }
 };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-2xl flex w-3/3 max-w-4xl">
        <div className="w-4/5 p-5">
          <h1 className="text-5xl font-bold mt-2 text-left">Welcome To</h1>
          <img
            src={Signlogo}
            alt="Logo"
            className='w-100 h-50'
          />
        </div>

        <div className="w-4/5 py-10 px-8">
          <h2 className="text-5xl font-bold mb-6">Sign In</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-2xl font-medium text-gray-700">User Name</label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-2xl font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
                Forget Password
              </a>
            </div>
            <div>
              <button type="submit" className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold">
                Sign In
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;