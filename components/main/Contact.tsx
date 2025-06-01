'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

import StarBackground from './StarBackground';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs
      .send('service_0nv4tki', 'template_ldcwdhm', templateParams, 'QVJTC6jJ5AqLsWPN1')
      .then((res) => {
        console.log('SUCCESS!', res.status, res.text);
        setStatus('✅ Message sent!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('❌ Failed to send. Try again.');
      });
  };

  return (
    <div
      className="relative z-20 w-full pt-[80px] scroll-mt-20"
      id="contact"
    >
      {/* Background Stars */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <StarBackground />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center py-20 px-6 md:px-20">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <Image
            src="/no-bg.png"
            alt="Contact"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-md">
            Contact Me
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6 w-full max-w-md mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white/10 text-white placeholder-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white/10 text-white placeholder-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="bg-white/10 text-white placeholder-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300 resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
            {status && (
              <p
                className={`text-center text-sm font-medium ${
                  status.includes('✅') ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
