'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


// Professional type definitions
interface Member {
  id: string;
  name: string;
  position: string;
  institution?: string;
  photo?: string;
  contact?: {
    email?: string;
    phone?: string;
    office?: string;
  };
}

// Professional member data
const COMMITTEE_MEMBERS: Member[] = [
  {
    id: 'chair-001',
    name: 'Dr. Sarah Mitchell',
    position: 'Conference Chair',
    institution: 'Stanford University',
    photo: 'https://placehold.co/400x320/1e40af/ffffff/png?text=Dr.+Mitchell',
    contact: {
      email: 's.mitchell@stanford.edu',
      office: 'Gates Building, Room 392'
    }
  },
  {
    id: 'cochair-001',
    name: 'Prof. James Anderson',
    position: 'Program Co-Chair',
    institution: 'MIT',
    photo: 'https://placehold.co/400x320/475569/ffffff/png?text=Prof.+Anderson',
    contact: {
      email: 'j.anderson@mit.edu',
      office: 'Stata Center, 32-G916'
    }
  },
  {
    id: 'secretary-001',
    name: 'Dr. Emily Chen',
    position: 'Organizing Secretary',
    institution: 'Carnegie Mellon University',
    photo: 'https://placehold.co/400x320/0f172a/ffffff/png?text=Dr.+Chen',
    contact: {
      email: 'e.chen@cmu.edu',
      office: 'Wean Hall, 5207'
    }
  },
  {
    id: 'coordinator-001',
    name: 'Mr. David Thompson',
    position: 'Technical Coordinator',
    institution: 'Conference Secretariat',
    photo: 'https://placehold.co/400x320/475569/ffffff/png?text=Mr.+Thompson',
    contact: {
      email: 'd.thompson@conference.org',
      phone: '+1 (555) 123-4567'
    }
  }
];

// Custom hook for scroll detection
const useScrollVisibility = (threshold = 0.1) => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-member-id');
          if (id) {
            setVisibleElements(prev => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(id);
              }
              return newSet;
            });
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll('[data-member-id]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return visibleElements;
};

// Professional member card component
const ProfessionalMemberCard: React.FC<{ member: Member; index: number }> = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const visibleElements = useScrollVisibility();
  const isVisible = visibleElements.has(member.id);

  return (
    <div 
      data-member-id={member.id}
      className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white mt-1.5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${index * 150}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      {/* Image Section */}
      <div className="relative h-80 overflow-hidden">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`${member.name} - ${member.position}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {member.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
        )}

        {/* Desktop: Hover Overlay (Bottom Right) */}
        <div 
          className={`hidden md:block absolute bottom-0 right-0 p-6 shadow-slate-950 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-right">
            <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
              {member.name}
            </h3>
            <p className="text-blue-200 font-medium text-sm">
              {member.position}
            </p>
          </div>
        </div>

        {/* Mobile: Scroll-triggered Overlay (Bottom) */}
        <div 
          className={`md:hidden absolute bottom-0 left-0 right-0 p-4 shadow-slate-950 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ 
            transitionDelay: `${index * 100}ms` 
          }}
        >
          <div className="text-left">
            <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
              {member.name}
            </h3>
            <p className="text-blue-200 font-medium text-sm">
              {member.position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main professional component
const OrganizingCommittee: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 ">
      <div className="max-w-7xl mx-auto mt-5.5 px-4 sm:px-6 lg:px-8">
        {/* Professional Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="text-blue-600 text-m font-medium">Conference Leadership</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Organizing Committee
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our distinguished committee brings together leading experts from academia and industry 
            to ensure the highest standards of conference excellence.
          </p>
          
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Grid with Image-only Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {COMMITTEE_MEMBERS.map((member, index) => (
            <ProfessionalMemberCard 
              key={member.id} 
              member={member} 
              index={index} 
            />
          ))}
        </div>       
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default OrganizingCommittee;
