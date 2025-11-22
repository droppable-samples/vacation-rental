import React from 'react';
import { StarIcon, HeartIcon } from 'lucide-react';
interface PropertyCardProps {
  imageUrl: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  dates: string;
  isTopPick?: boolean;
}
export const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  title,
  location,
  price,
  rating,
  dates,
  isTopPick = false
}) => {
  return <div className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-xl mb-2">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        {isTopPick && (
          <div className="absolute top-3 left-3 bg-[#FF385C] text-white text-xs font-medium px-2 py-1 rounded-md">
            Top Pick
          </div>
        )}
        <button className="absolute top-3 right-3 text-white hover:text-[#FF385C]">
          <HeartIcon className="h-6 w-6" />
        </button>
      </div>
      <div>
        <div className="flex justify-between">
          <h3 className="font-medium text-lg text-gray-900 truncate">
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