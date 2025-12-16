import React from 'react';
import { StarIcon, HeartIcon } from 'lucide-react';
interface PropertyCardProps {
  imageUrl: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  dates: string;
}
export const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  title,
  location,
  price,
  rating,
  dates
}) => {
  return <div className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-xl mb-2 shadow-lg hover:shadow-2xl transition-all duration-500">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105 transition-all duration-500 ease-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <button className="absolute top-3 right-3 text-white hover:text-[#FF385C] transform hover:scale-110 transition-all duration-200 drop-shadow-lg">
          <HeartIcon className="h-6 w-6" />
        </button>
      </div>
      <div>
        <div className="flex justify-between">
          <h3 className="font-medium text-base text-gray-900 truncate">
            {location}
          </h3>
          <div className="flex items-center">
            <StarIcon className="h-4 w-4 text-gray-900 mr-1" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm truncate">{title}</p>
        <p className="text-gray-500 text-sm">{dates}</p>
        <p className="text-gray-900 mt-1">
          <span className="font-semibold">${price}</span>
          <span className="text-sm"> night</span>
        </p>
      </div>
    </div>;
};