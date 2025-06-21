'use client';

import React from 'react';
import Image from 'next/image';

const members = [
  {
    name: 'Dr. A. Sharma',
    designation: 'Conference Chair',
    photo: '/members/sharma.jpg',
  },
  {
    name: 'Prof. B. Singh',
    designation: 'Co-Chair',
    photo: '/members/singh.jpg',
  },
  {
    name: 'Ms. C. Patel',
    designation: 'Organizing Secretary',
    photo: '/members/patel.jpg',
  },
  // Add more members as needed
];

export default function OrginazingMembers() {
  return (
    <section className="min-h-screen bg-[#F7F3EB] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#783F46]">Organizing Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <Image
                src={member.photo}
                alt={member.name}
                width={400}
                height={320}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Name & Designation for large screens (hover) */}
              <div
                className="hidden md:block absolute bottom-0 right-0 w-full px-4 py-3
                  bg-gradient-to-t from-black/80 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="flex flex-col items-end">
                  <span className="text-white font-semibold text-lg drop-shadow">{member.name}</span>
                  <span className="text-pink-200 text-sm">{member.designation}</span>
                </div>
              </div>

              {/* Name & Designation for mobile (on scroll into view) */}
              <div
                className="md:hidden absolute bottom-0 left-0 w-full px-4 py-3
                  bg-gradient-to-t from-black/80 to-transparent
                  opacity-0 animate-fadein-on-scroll"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col items-start">
                  <span className="text-white font-semibold text-lg drop-shadow">{member.name}</span>
                  <span className="text-pink-200 text-sm">{member.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile scroll effect animation */}
      <style jsx>{`
        @media (max-width: 767px) {
          .animate-fadein-on-scroll {
            opacity: 1 !important;
            animation: fadeInUp 1s both;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

