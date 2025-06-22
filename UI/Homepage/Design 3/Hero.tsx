'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/Hero_Background2.webp"
        alt="Conference Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full px-6 sm:px-12 lg:px-32 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          SMART SYSTEMS: INNOVATIONS IN COMPUTING
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
            href="/CFP"
            className="border border-white hover:bg-white hover:text-purple-700 px-6 py-3 rounded-full text-lg font-medium"
          >
            Submit Abstract
          </Link>
        </div>
      </div>
      {/* Publication Partner */}
      <div
        className="absolute z-30 flex items-center gap-3
        right-8 bottom-8
        sm:right-8 sm:bottom-8
        md:right-12 md:bottom-12
        lg:right-16 lg:bottom-16
        max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:bottom-20
        rounded-xl px-4 py-2 bg-gray-800
        shadow-lg backdrop-blur-sm"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.35)' }}
      >
        <span className="text-white text-base font-semibold drop-shadow-md">
          Publication Partner:
        </span>
        <div className="w-12 h-12 flex items-center justify-center overflow-hidden bg-transparent">
          <Image
        src="https://icon2.cleanpng.com/20180711/hr/kisspng-academic-journal-springer-science-business-media-p-springer-5b4675ff028096.4745617715313443830103.jpg"
        alt="DEV Publication Partner"
        width={48}
        height={48}
        className="object-contain drop-shadow-lg h-18 w-12"
        priority
        style={{ background: 'transparent' }}
          />
        </div>
      </div>
      {/* Scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-white opacity-75"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
