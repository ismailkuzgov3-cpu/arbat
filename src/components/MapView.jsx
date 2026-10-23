import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import { useLocation, useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import { ArrowLeft } from 'lucide-react';

import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function MapView() {
  const navigate = useNavigate();
  const location = useLocation();
  const route = location.state?.route;

  if (!route) {
    return <div className="p-4">Маршрут не найден. <button onClick={() => navigate('/')}>Назад</button></div>;
  }

  return (
    <div className="h-screen w-full flex flex-col relative z-0 max-w-md mx-auto">
      <button 
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 z-[1000] bg-white p-2 rounded-full shadow-lg text-gray-800 hover:bg-gray-100"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="p-4 bg-white shadow-sm z-10">
        <h2 className="text-xl font-bold">{route.name}</h2>
        <p className="text-sm text-gray-500">{route.time} • {route.driver}</p>
      </div>

      <div className="flex-1 w-full h-full">
        <MapContainer 
          center={route.coords[0]} 
          zoom={10} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap'
          />
          <Polyline positions={route.coords} color="blue" weight={5} />
          
          <Marker position={route.coords[0]}>
            <Popup>Начало маршрута</Popup>
          </Marker>
          
          <Marker position={route.coords[route.coords.length - 1]}>
            <Popup>Конец маршрута</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}