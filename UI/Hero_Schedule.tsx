'use client';

import { Calendar } from 'lucide-react';

export default function Hero_Schedule() {
  return (
    <div className="bg-purple-100/60 text-purple-900 rounded-xl p-6 w-fit shadow-md">
      <p className="text-sm text-purple-600 font-medium mb-1">Conference Topics</p>
      <h3 className="text-xl font-semibold mb-4">University Papers</h3>

      <div className="flex items-center text-sm font-medium text-purple-800">
        <Calendar className="w-4 h-4 mr-2 text-purple-700" />
        <span>March 25–27, 2022</span>
      </div>
    </div>
  );
}
