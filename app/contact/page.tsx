'use client';
import Navbar from '@/components/Navbar';


import { useState } from 'react';

export default function ContactMePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login', formData);
    alert('Login info submitted!');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup', formData);
    alert('Signup info submitted!');
  };

  return (
    <div>
      <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Contact Me</h1>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="flex justify-between gap-4">
            <button
              onClick={handleLogin}
              className="w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
            <button
              onClick={handleSignup}
              className="w-1/2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
