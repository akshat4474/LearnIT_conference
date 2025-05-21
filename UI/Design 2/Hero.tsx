'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#FED4A5]">
      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full px-6 sm:px-12 lg:px-32 text-gray-900">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          IT Conference 2025
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-light mb-8 max-w-2xl">
          Empowering Research. Celebrating Innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/register"
            className="bg-[#F14785] hover:bg-[#d83c73] text-white px-6 py-3 rounded-full text-lg font-medium"
          >
            Register Now
          </Link>
          <Link
            href="/call-for-papers"
            className="border border-gray-900 hover:bg-gray-900 hover:text-[#FED4A5] px-6 py-3 rounded-full text-lg font-medium text-gray-900"
          >
            Submit Abstract
          </Link>
        </div>
      </div>
    </section>
  );
}
