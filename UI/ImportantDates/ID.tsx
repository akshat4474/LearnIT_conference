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
      <div className="bg-gray-500 shadow-md border-b">
        <div className="max-w-6xl mx-auto px-5 py-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Conference Timeline</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-red-700 via-orange-500 via-yellow-400 to-green-300 rounded-full"></div>
            
            {/* Timeline Events */}
            <div className="flex justify-between items-start relative">
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
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent mb-4">
            Important Dates
          </h1>
          <p className="text-xl text-gray-700">Mark your calendar for these key conference milestones</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {dates.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className={`${getTypeColor(item.type)} border-2 rounded-xl p-6 transition-all duration-300 shadow-2xl hover:shadow-lg hover:scale-105 cursor-pointer`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-white shadow-sm ${getIconColor(item.type)}`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-80 mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock size={16} className="opacity-60" />
                        <span className="font-semibold">{item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Registration Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-700 flex items-center">
                <DollarSign className="mr-2" size={20} />
                Author Registration
              </h3>
              <div className="space-y-2 text-gray-500">
                <p className="text-sm italic text-gray-800">* Includes conference access and proceedings</p>
                <p>• Early Bird (by Mar 20): <span className="font-semibold text-green-600">299</span></p>
                <p>• Late Registration (by Apr 1): <span className="font-semibold text-red-600">399</span></p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-700 flex items-center">
                <Users className="mr-2" size={20} />
                Participant Registration
              </h3>
              <div className="space-y-2 text-gray-500">
                <p className="text-sm italic text-gray-800">* For non-author attendees</p>
                <p>• Early Bird (by Mar 20): <span className="font-semibold text-green-600">199</span></p>
                <p>• Late Registration (by Apr 1): <span className="font-semibold text-red-600">299</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

