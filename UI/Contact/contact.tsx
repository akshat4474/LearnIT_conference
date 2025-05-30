'use client';

import React, { useRef } from 'react';
import ContactButton from '../../components/contact_button';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section className="min-h-screen bg-[#F7F3EB] text-gray-900 px-6 sm:px-12 py-16 pt-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-semibold mb-2">Contact Us</h2>
          <p className="mb-6 text-sm text-gray-700">Drop us a message, we’ll get back to you soon!</p>

          <form ref={formRef} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-m font-medium mb-1">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder='Enter your name'
                className="w-full bg-white border border-gray-300 p-3 rounded placeholder-gray-500 rounded-b-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-m font-medium mb-1">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder='Enter your email address'
                className="w-full bg-white border border-gray-300 p-3 rounded placeholder-gray-500 rounded-b-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-m font-medium mb-1">Your Phone Number (+91)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                pattern="[0-9+ ]{7,15}"
                placeholder='Enter your phone number'
                className="w-full bg-white border border-gray-300 p-3 rounded placeholder-gray-500 rounded-b-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-m font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder='Type your message here...'
                className="w-full bg-white border border-gray-300 p-3 rounded placeholder-gray-500 rounded-b-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              />
            </div>

            {/* Contact Button */}
            <ContactButton formRef={formRef} />
          </form>
        </div>

        {/* Map Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-2">Find Us</h2>
          <p className="mb-4 text-sm text-gray-700">Manipal University Jaipur, Rajasthan, India.</p>
          <iframe
            className="w-full h-[500px] rounded shadow-2xs border border-gray-300 hover:shadow-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8772831810866!2d75.5652343!3d26.8438552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1747753749907!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-16 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">For more information contact</h3>
        <div className="space-y-2 text-sm text-gray-700">{/* Add contact info if needed */}</div>
      </div>
    </section>
  );
}
