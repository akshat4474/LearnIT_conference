'use client';

import Link from 'next/link';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#783F46] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Conference Info + Address + Map */}
        <div>
          <h2 className="text-lg font-bold mb-2">University Conference</h2>
          <p className="text-sm text-purple-100 mb-3">
            A professional conference focused on the presentation of university papers.
          </p>
          {/* <p className="text-sm text-purple-100 mb-4">
            Jaipur-Ajmer Express Highway,<br />
            Dehmi Kalan, Near GVK Toll Plaza,<br />
            Jaipur, Rajasthan 303007
          </p> */}

          {/* Google Map Embed */}
          <div className="w-full h-48 overflow-hidden rounded-md">
            <iframe
              title="University Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8772831810866!2d75.5652343!3d26.8438552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1747753749907!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm text-purple-100">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/schedule" className="hover:underline">Schedule</Link></li>
            <li><Link href="/call-for-papers" className="hover:underline">Call for Papers</Link></li>
            <li><Link href="/register" className="hover:underline">Register</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h2 className="text-lg font-bold mb-2">Connect With Us</h2>
          <div className="flex space-x-4 mb-4 text-purple-100">
            <Link href="https://linkedin.com" target="_blank"><Linkedin className="w-5 h-5 hover:text-white" /></Link>
            <Link href="https://twitter.com" target="_blank"><Twitter className="w-5 h-5 hover:text-white" /></Link>
            <Link href="mailto:conference@email.com"><Mail className="w-5 h-5 hover:text-white" /></Link>
          </div>
          <p className="text-xs text-purple-100">
            © 2025 University Conference. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
