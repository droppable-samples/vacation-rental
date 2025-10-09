import React, { useEffect, useState } from 'react';
import { SearchIcon, GlobeIcon, MenuIcon, UserIcon } from 'lucide-react';
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <header className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md bg-white' : 'bg-white lg:bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <svg className="h-10 w-auto text-[#FF385C]" viewBox="0 0 1991 2000" fill="currentColor">
                <path d="M1851.6,901.3c0-220.7-179.1-399.9-399.9-399.9c-220.7,0-399.9,179.1-399.9,399.9 c0,220.7,179.1,399.9,399.9,399.9C1672.5,1301.1,1851.6,1122,1851.6,901.3z M614.5,1458.4c-151.8-63.9-252.6-212.5-252.6-380.5 c0-226.2,183.5-409.7,409.7-409.7c96.2,0,184.7,33.2,254.7,88.9C973.1,493.2,775.7,319.7,537.7,319.7 c-304.9,0-552,247.1-552,552c0,304.9,247.1,552,552,552C587.3,1423.7,605.2,1458.4,614.5,1458.4z M1991,995.7 c0,552-447.3,999.3-999.3,999.3c-552,0-999.3-447.3-999.3-999.3c0-552,447.3-999.3,999.3-999.3C1543.7-3.6,1991,443.7,1991,995.7z" />
              </svg>
            </a>
          </div>
          {/* Search Bar */}
          <div className="hidden md:flex items-center justify-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <div className="flex items-center border border-gray-300 rounded-full py-2 px-3 shadow-sm hover:shadow-md transition-shadow">
                <button className="text-gray-900 font-medium text-sm px-4">
                  Anywhere
                </button>
                <span className="h-6 border-l border-gray-300"></span>
                <button className="text-gray-900 font-medium text-sm px-4">
                  Any week
                </button>
                <span className="h-6 border-l border-gray-300"></span>
                <button className="text-gray-500 text-sm px-4">
                  Add guests
                </button>
                <div className="bg-[#FF385C] p-2 rounded-full ml-2">
                  <SearchIcon size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
          {/* Right Nav */}
          <div className="flex items-center">
            <button className="hidden md:flex items-center text-sm font-medium text-gray-900 rounded-full hover:bg-gray-100 px-4 py-2">
              Airbnb your home
            </button>
            <button className="ml-4 hidden md:flex items-center justify-center p-2 rounded-full hover:bg-gray-100">
              <GlobeIcon size={18} className="text-gray-700" />
            </button>
            <div className="ml-4 flex items-center border border-gray-300 rounded-full p-1 hover:shadow-md">
              <MenuIcon size={18} className="text-gray-700 ml-2" />
              <div className="bg-gray-500 text-white rounded-full p-1 ml-2 mr-1">
                <UserIcon size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>;
};