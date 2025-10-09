import React from 'react';
import { MountainSnowIcon, TreePineIcon, BuildingIcon, UmbrellaIcon, TentIcon, HomeIcon, WavesIcon, CoffeeIcon, FlameIcon, HeartIcon, LandmarkIcon, BoxIcon } from 'lucide-react';
const categories = [{
  name: 'Beach',
  icon: BoxIcon
}, {
  name: 'Mountains',
  icon: MountainSnowIcon
}, {
  name: 'Countryside',
  icon: TreePineIcon
}, {
  name: 'City',
  icon: BuildingIcon
}, {
  name: 'Tropical',
  icon: UmbrellaIcon
}, {
  name: 'Camping',
  icon: TentIcon
}, {
  name: 'Cabins',
  icon: HomeIcon
}, {
  name: 'Lakefront',
  icon: WavesIcon
}, {
  name: 'Trending',
  icon: CoffeeIcon
}, {
  name: 'Design',
  icon: HeartIcon
}, {
  name: 'Historical',
  icon: LandmarkIcon
}, {
  name: 'Luxe',
  icon: FlameIcon
}];
export const CategoryFilter = () => {
  return <div className="py-4 border-b">
      <div className="relative">
        <div className="flex space-x-8 overflow-x-auto pb-4 hide-scrollbar">
          {categories.map((category, index) => <button key={index} className="flex flex-col items-center min-w-[56px] text-gray-600 hover:text-black hover:border-b-2 hover:border-black pb-2 transition-colors">
              <category.icon size={24} className="mb-1" />
              <span className="text-xs">{category.name}</span>
            </button>)}
        </div>
      </div>
    </div>;
};