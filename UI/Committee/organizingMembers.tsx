import React from 'react';
import Image from 'next/image';
import "../../styles/committee.css"

const members = [
  {
    name: 'Dr. A. Sharma',
    designation: 'Conference Chair',
    photo: 'https://placehold.co/400x320/783F46/FFFFFF/png?text=Dr.+Sharma',
  },
  {
    name: 'Prof. B. Singh',
    designation: 'Co-Chair',
    photo: 'https://placehold.co/400x320/783F46/FFFFFF/png?text=Prof.+Singh',
  },
  {
    name: 'Ms. C. Patel',
    designation: 'Organizing Secretary',
    photo: 'https://placehold.co/400x320/783F46/FFFFFF/png?text=Ms.+Patel',
  },
  {
    name: 'Mr. D. Mehra',
    designation: 'Coordinator',
    // No photo — handled conditionally
  },
];


export default function OrganizingMembers() {
  return (
    <section className="min-h-screen bg-[#F7F3EB] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#783F46]">
          Organizing Members
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden shadow-lg bg-white"
            >
              {member.photo && (
                <Image
                  src={member.photo}
                  alt={`Photo of ${member.name}`}
                  width={400}
                  height={320}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              )}

              {/* Hover Overlay (Desktop) */}
              <div
                className="hidden md:block absolute bottom-0 right-0 w-full px-4 py-3
                  bg-gradient-to-t from-black/80 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="flex flex-col items-end text-right">
                  <span className="text-white font-semibold text-lg drop-shadow">
                    {member.name}
                  </span>
                  <span className="text-pink-200 text-sm">
                    {member.designation}
                  </span>
                </div>
              </div>

              {/* Scroll-triggered Overlay (Mobile) */}
              <div
                className="md:hidden absolute bottom-0 left-0 w-full px-4 py-3
                  bg-gradient-to-t from-black/80 to-transparent
                  opacity-0 animate-fadein-on-scroll"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col items-start text-left">
                  <span className="text-white font-semibold text-lg drop-shadow">
                    {member.name}
                  </span>
                  <span className="text-pink-200 text-sm">
                    {member.designation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
