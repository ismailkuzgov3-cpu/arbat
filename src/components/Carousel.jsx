import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Carousel() {
  const photos = Array.from({ length: 9 }, (_, i) => `/images/${i + 1}.jpg`);

  return (
    <div className="w-full h-64 max-h-[250px] relative overflow-hidden bg-gray-200">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img 
              src={photo} 
              alt={`Арбат ${index + 1}`} 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="font-semibold text-sm text-gray-800">Автостанция Арбат</span>
      </div>
    </div>
  );
}