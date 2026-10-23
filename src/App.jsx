import React from 'react';
import Carousel from './components/Carousel';
import RouteCard from './components/RouteCard';
import { routes } from './data';
import { Bus } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 max-w-md mx-auto shadow-xl pb-10 font-sans">
      
      <Carousel />

      <div className="p-4">
        <div className="flex items-center gap-2 mb-4 mt-2">
          <Bus className="text-blue-600" size={24} />
          <h2 className="text-xl font-bold text-gray-800">Ближайшие рейсы</h2>
        </div>

        <div className="flex flex-col gap-3">
          {routes.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>
      </div>
    </div>
  );
}