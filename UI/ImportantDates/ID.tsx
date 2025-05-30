'use client';

import React from 'react';
import { Calendar, Users, FileText, IndianRupee, Award } from 'lucide-react';

export default function ImportantDates() {
  const dates = [
    { title: 'Last Date of Paper Submission', date: 'February 15, 2025', icon: FileText, type: 'deadline', description: 'Final deadline for paper submissions' },
    { title: 'Notification of Acceptance of Papers', date: 'March 1, 2025', icon: Award, type: 'notification', description: 'Authors will be notified about paper acceptance' },
    { title: 'Camera-ready Papers', date: 'March 15, 2025', icon: FileText, type: 'deadline', description: 'Final version of accepted papers due' },
    { title: 'Author Registration (Early Bird)', date: 'March 20, 2025', icon: IndianRupee, type: 'registration', description: 'Special early bird pricing for authors' },
    { title: 'Author Registration (Late Registration)', date: 'April 1, 2025', icon: IndianRupee, type: 'registration', description: 'Standard registration fee for authors' },
    { title: 'Participant (Non-author) Early Registration', date: 'March 20, 2025', icon: Users, type: 'registration', description: 'Early bird pricing for non-author participants' },
    { title: 'Participant (Non-author) Late Registration', date: 'April 1, 2025', icon: Users, type: 'registration', description: 'Standard registration for non-author participants' },
    { title: 'Conference Sessions', date: 'April 15-17, 2025', icon: Calendar, type: 'event', description: 'Main conference days with all sessions' },
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'deadline': return 'text-purple-600';
      case 'notification': return 'text-yellow-600';
      case 'registration': return 'text-blue-600';
      case 'event': return 'text-green-600';
      default: return 'text-gray-500';
    }
  };

  return (
    <main className="min-h-screen text-gray-800 px-6 py-20" style={{ backgroundColor: '#F3F0E8' }}>
      <style jsx>{`
        .timeline-dot {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Important Dates</h2>
          <p className="text-gray-600 text-lg mt-2">Mark your calendar for these key conference milestones</p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 transform -translate-x-1/2 z-0" />

          <div className="space-y-24">
            {dates.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative flex items-center justify-between w-full">
                  {isLeft ? (
                    <>
                      {/* Card Left */}
                      <div className="w-1/2 pr-8 flex justify-end">
                        <div className="bg-[#FFFDF9] border border-indigo-200 p-6 rounded-xl shadow-xl shadow-indigo-100 max-w-sm text-right transition-transform hover:scale-[1.02]">
                          <div className="flex justify-end mb-2">
                            <div className="bg-[#ECECEC] p-3 rounded-full inline-block shadow-sm">
                              <Icon size={26} className={getIconColor(item.type)} />
                            </div>
                          </div>
                          <h3 className="text-lg font-bold">{item.title}</h3>
                          <p className="text-sm text-gray-700 mt-1">{item.description}</p>
                        </div>
                      </div>

                      {/* Timeline Dot */}
                      <div className="relative z-10">
                        <div className="w-5 h-5 bg-white border-4 border-indigo-400 rounded-full mx-4 ring-2 ring-purple-300 shadow-lg timeline-dot" />
                      </div>

                      {/* Date Right */}
                      <div className="w-1/2 pl-8 text-left">
                        <span className="inline-block bg-indigo-600 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-lg ring-2 ring-indigo-200">
                          {item.date}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Date Left */}
                      <div className="w-1/2 pr-8 text-right">
                        <span className="inline-block bg-indigo-600 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-lg ring-2 ring-indigo-200">
                          {item.date}
                        </span>
                      </div>

                      {/* Timeline Dot */}
                      <div className="relative z-10">
                        <div className="w-5 h-5 bg-white border-4 border-indigo-400 rounded-full mx-4 ring-2 ring-purple-300 shadow-lg timeline-dot" />
                      </div>

                      {/* Card Right */}
                      <div className="w-1/2 pl-8 flex justify-start">
                        <div className="bg-[#FFFDF9] border border-indigo-200 p-6 rounded-xl shadow-xl shadow-indigo-100 max-w-sm text-left transition-transform hover:scale-[1.02]">
                          <div className="flex justify-start mb-2">
                            <div className="bg-[#ECECEC] p-3 rounded-full inline-block shadow-sm">
                              <Icon size={26} className={getIconColor(item.type)} />
                            </div>
                          </div>
                          <h3 className="text-lg font-bold">{item.title}</h3>
                          <p className="text-sm text-gray-700 mt-1">{item.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
