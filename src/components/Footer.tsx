import React from 'react';
import { GlobeIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    AirCover
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    Anti-discrimination
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    Disability support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    Cancellation options
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    Report neighborhood concern
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Community
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    Disaster relief housing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    Combating discrimination
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    Airbnb.org
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Hosting
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    Airbnb your home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    AirCover for Hosts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    Hosting resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    Community forum
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    Hosting responsibly
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Airbnb
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    Newsroom
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    New features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    Investors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline text-sm">
                    Gift cards
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0">
              <div className="text-sm text-gray-600">
                &copy; {new Date().getFullYear()} Airbnb, Inc.
              </div>
              <div className="hidden md:flex md:mx-2">·</div>
              <div className="flex space-x-4 text-sm text-gray-600">
                <a href="#" className="hover:underline">
                  Privacy
                </a>
                <a href="#" className="hover:underline">
                  Terms
                </a>
                <a href="#" className="hover:underline">
                  Sitemap
                </a>
              </div>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <div className="flex items-center">
                <GlobeIcon size={16} className="text-gray-700 mr-2" />
                <a href="#" className="text-sm font-medium text-gray-900 hover:underline">
                  English (US)
                </a>
              </div>
              <div className="ml-4 text-sm font-medium text-gray-900">
                <a href="#" className="hover:underline">
                  $ USD
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};