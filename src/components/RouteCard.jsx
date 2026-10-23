import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, User, MapPin } from 'lucide-react';

export default function RouteCard({ route }) {
  const navigate = useNavigate();

  const getStatusConfig = (status) => {
    switch (status) {
      case 'boarding':
        return { text: 'Набирает людей', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' };
      case 'on_way':
        return { text: 'В пути', color: 'bg-green-100 text-green-800 border-green-200' };
      default:
        return { text: 'Ожидание', color: 'bg-gray-100 text-gray-600 border-gray-200' };
    }
  };

  const statusInfo = getStatusConfig(route.status);

  const handleGoToMap = () => {
    navigate('/map', { state: { route } });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-gray-800 text-lg">{route.name}</h3>
          <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
            <Clock size={14} />
            <span>{route.time}</span>
          </div>
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${statusInfo.color}`}>
          {statusInfo.text}
        </span>
      </div>
      
      <div className="flex items-center justify-between border-t border-gray-50 pt-3">
        <div className="flex items-center gap-1.5 text-sm text-gray-600">
          <User size={14} className="text-gray-400" />
          <span>{route.driver}</span>
        </div>
        <button 
          onClick={handleGoToMap}
          className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-lg"
        >
          <MapPin size={16} />
          На карте
        </button>
      </div>
    </div>
  );
}