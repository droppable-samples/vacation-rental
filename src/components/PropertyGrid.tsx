import React from 'react';
import { PropertyCard } from './PropertyCard';
const properties = [{
  id: 1,
  imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80',
  title: 'Modern villa with private pool',
  location: 'Bali, Indonesia',
  price: 120,
  rating: 4.96,
  dates: 'Nov 12-17'
}, {
  id: 2,
  imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  title: 'Luxury beachfront house',
  location: 'Malibu, United States',
  price: 350,
  rating: 4.92,
  dates: 'Dec 3-8'
}, {
  id: 3,
  imageUrl: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  title: 'Cozy cabin in the woods',
  location: 'Aspen, United States',
  price: 175,
  rating: 4.89,
  dates: 'Jan 15-20'
}, {
  id: 4,
  imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  title: 'Modern apartment with city view',
  location: 'New York, United States',
  price: 200,
  rating: 4.85,
  dates: 'Nov 25-30'
}, {
  id: 5,
  imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  title: 'Historic apartment in city center',
  location: 'Paris, France',
  price: 150,
  rating: 4.91,
  dates: 'Dec 10-15'
}, {
  id: 6,
  imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  title: 'Stunning villa with ocean view',
  location: 'Santorini, Greece',
  price: 280,
  rating: 4.97,
  dates: 'Aug 5-10'
}, {
  id: 7,
  imageUrl: 'https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  title: 'Charming cottage near the lake',
  location: 'Lake Como, Italy',
  price: 195,
  rating: 4.88,
  dates: 'Sep 15-20'
}, {
  id: 8,
  imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
  title: 'Luxury penthouse with private terrace',
  location: 'Barcelona, Spain',
  price: 225,
  rating: 4.94,
  dates: 'Oct 8-13'
}];
export const PropertyGrid = () => {
  return <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {properties.map(property => <PropertyCard key={property.id} imageUrl={property.imageUrl} title={property.title} location={property.location} price={property.price} rating={property.rating} dates={property.dates} />)}
      </div>
    </div>;
};