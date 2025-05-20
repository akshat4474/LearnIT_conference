'use client';

import Link from 'next/link';
import Image from 'next/image';
import Hero_Schedule from './Hero_Schedule'; // Adjust path if needed

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/Hero_Background1.png"
        alt="Conference Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/30 z-10" /> */}

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full px-6 sm:px-12 lg:px-32 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          IT Conference 2025
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-light mb-8 max-w-2xl">
          Empowering Research. Celebrating Innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/register"
            className="bg-[#F14785] hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg font-medium"
          >
            Register Now
          </Link>
          <Link
            href="/call-for-papers"
            className="border border-white hover:bg-white hover:text-purple-700 px-6 py-3 rounded-full text-lg font-medium"
          >
            Submit Abstract
          </Link>
        </div>
      </div>

      {/* Hero Schedule box at bottom-right */}
      <div className="absolute bottom-8 right-8 z-20">
        <Hero_Schedule />
      </div>
    </section>
  );
}
