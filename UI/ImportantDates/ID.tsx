import React from 'react';
import { Calendar, Clock, Users, FileText, DollarSign, Award } from 'lucide-react';

export default function ImportantDates() {
  const dates = [
    {
      title: 'Last Date of Paper Submission',
      date: 'February 15, 2025',
      icon: FileText,
      type: 'deadline',
      description: 'Final deadline for paper submissions'
    },
    {
      title: 'Notification of Acceptance of Papers',
      date: 'March 1, 2025',
      icon: Award,
      type: 'notification',
      description: 'Authors will be notified about paper acceptance'
    },
    {
      title: 'Camera-ready Papers',
      date: 'March 15, 2025',
      icon: FileText,
      type: 'deadline',
      description: 'Final version of accepted papers due'
    },
    {
      title: 'Author Registration (Early Bird)',
      date: 'March 20, 2025',
      icon: DollarSign,
      type: 'registration',
      description: 'Special early bird pricing for authors'
    },
    {
      title: 'Author Registration (Late Registration)',
      date: 'April 1, 2025',
      icon: DollarSign,
      type: 'registration',
      description: 'Standard registration fee for authors'
    },
    {
      title: 'Participant (Non-author) Early Registration',
      date: 'March 20, 2025',
      icon: Users,
      type: 'registration',
      description: 'Early bird pricing for non-author participants'
    },
    {
      title: 'Participant (Non-author) Late Registration',
      date: 'April 1, 2025',
      icon: Users,
      type: 'registration',
      description: 'Standard registration for non-author participants'
    },
    {
      title: 'Conference Sessions',
      date: 'April 15-17, 2025',
      icon: Calendar,
      type: 'event',
      description: 'Main conference days with all sessions'
    }
  ];

  const timelineEvents = [
    { title: 'Paper Submission', date: 'Feb 15', status: 'completed' },
    { title: 'Acceptance Notice', date: 'Mar 1', status: 'upcoming' },
    { title: 'Camera Ready', date: 'Mar 15', status: 'upcoming' },
    { title: 'Early Registration', date: 'Mar 20', status: 'upcoming' },
    { title: 'Late Registration', date: 'Apr 1', status: 'upcoming' },
    { title: 'Conference', date: 'Apr 15-17', status: 'upcoming' }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {                       
      case 'deadline': return 'bg-gray-100 border-gray-500 text-gray-800';
      case 'notification': return 'bg-gray-100 border-gray-600 text-gray-800';
      case 'registration': return 'bg-gray-100 border-gray-600 text-gray-900';
      case 'event': return 'bg-gray-100 border-gray-500 text-black';
      default: return 'bg-gray-100 border-gray-500 text-gray-800';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'deadline': return 'text-gray-700';
      case 'notification': return 'text-gray-600';
      case 'registration': return 'text-gray-500';
      case 'event': return 'text-gray-400';
      default: return 'text-gray-600';
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Timeline Section */}
      {/*<div className="bg-gray-500 shadow-md border-b">
        <div className="max-w-6xl mx-auto px-5 py-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Conference Timeline</h2>
          <div className="relative">
            {/* Timeline Line */}
            {/* <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-red-700 via-orange-500 via-yellow-400 to-green-300 rounded-full"></div> */}
            
            {/* Timeline Events */}
            {/* <div className="flex justify-between items-start relative">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex flex-col items-center py-2">
                  <div className={`w-4 h-4 rounded-full ${
                    event.status === 'completed' ? 'bg-red-600' : 
                    event.status === 'current' ? 'bg-amber-500' : 'bg-green-500'
                  } border-4 border-white shadow-lg z-10`}></div>
                  <div className="mt-4 text-center">
                    <div className="text-sm font-semibold text-white">{event.title}</div>
                    <div className="text-xs text-gray-300 mt-1">{event.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>*/} 

      {/* Main Content - Redesigned Timeline Style */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent mb-4">
            Important Dates
          </h1>
          <p className="text-xl text-gray-700">Mark your calendar for these key conference milestones</p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600"></div>
          
          {/* Timeline Items */}
          <div className="space-y-8">
            {dates.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-20 ${isLeft ? 'mr-12' : 'ml-20'} flex-1`}>
                    <div className="bg-white rounded-2xl shadow-lg border-l-4 border-slate-600 p-6 hover:shadow-xl transition-all duration-300 hover:scale-102">

                      {/* Date Badge */}
                      <div className="inline-block bg-gradient-to-r from-amber-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-md">
                        {item.date}
                      </div>
                      
                      {/* Content Area */}
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl bg-gray-50 shadow-sm">
                          <Icon size={24} className={getIconColor(item.type)} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Registration Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-700 flex items-center mb-4">
                <DollarSign className="mr-2" size={24} />
                Author Registration
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="text-sm italic text-gray-700 bg-gray-50 p-2 rounded">* Includes conference access and proceedings</p>
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span>Early Bird (by Mar 20):</span>
                  <span className="font-bold text-green-600 text-lg">299</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                  <span>Late Registration (by Apr 1):</span>
                  <span className="font-bold text-red-600 text-lg">399</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 flex items-center mb-4">
                <Users className="mr-2" size={24} />
                Participant Registration
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="text-sm italic text-gray-700 bg-gray-50 p-2 rounded">* For non-author attendees</p>
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span>Early Bird (by Mar 20):</span>
                  <span className="font-bold text-green-600 text-lg">199</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                  <span>Late Registration (by Apr 1):</span>
                  <span className="font-bold text-red-600 text-lg">299</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}