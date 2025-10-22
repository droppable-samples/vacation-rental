import React from 'react';
import { SearchIcon } from 'lucide-react';
export const Hero = () => {
  return <div className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px]">
      {/* Hero Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Beautiful vacation rental with mountain view" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </div>
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
          Welcome
        </h1>
        <p className="text-xl text-white mb-8 max-w-xl">
          Discover unique stays to live, work, or just relax.
        </p>
        {/* Search Box */}
        <div className="bg-white rounded-full shadow-lg p-2 max-w-4xl w-full">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-2 md:border-r border-gray-200">
              <div className="font-medium text-sm">Where</div>
              <input type="text" placeholder="Search destinations" className="w-full text-gray-900 outline-none text-sm mt-1" />
            </div>
            <div className="flex-1 p-2 md:border-r border-gray-200">
              <div className="font-medium text-sm">When</div>
              <div className="text-gray-500 text-sm mt-1">Any week</div>
            </div>
            <div className="flex-1 p-2 md:border-r border-gray-200">
              <div className="font-medium text-sm">Who</div>
              <div className="text-gray-500 text-sm mt-1">Add guests</div>
            </div>
            <div className="p-2 flex items-center justify-center">
              <button className="bg-[#FF385C] text-white p-3 rounded-full hover:bg-[#E31C5F] transition-colors">
                <SearchIcon size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};