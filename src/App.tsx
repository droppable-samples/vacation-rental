import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { PropertyGrid } from './components/PropertyGrid';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter />
          <PropertyGrid />
        </div>
      </main>
      <Footer />
    </div>;
}