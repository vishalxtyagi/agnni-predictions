import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CrownDecoration from './CrownDecoration';
import Service1 from '../assets/images/service1.webp';
import Service2 from '../assets/images/service2.webp';
import Service3 from '../assets/images/service3.webp';
import Service4 from '../assets/images/service4.webp';

const services = [
  {
    image: Service1,
    title: "Tarot Card Reading",
    description: "Unlock the mysteries of your future with our comprehensive tarot card readings and spiritual guidance."
  },
  {
    image: Service2,
    title: "Angel Reading",
    description: "Connect with your guardian angels and receive divine guidance for your life's journey."
  },
  {
    image:Service3,
    title: "Crystal Healing",
    description: "Experience the healing power of crystals to balance your energy and promote wellness."
  },
  {
    image: Service4,
    title: "Vastu Consultation",
    description: "Harmonize your living space with ancient principles for better energy flow and prosperity."
  },
];

export default function ServiceSlider() {
  return (
    <section id="services" className="py-20 bg-black/20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <CrownDecoration className="w-12 h-8 text-yellow-400" />
          <div className="flex justify-center mb-8"></div>
          <h2 className="text-4xl font-bold mb-4 font-britannic">
            Our Services with Consultation
          </h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto font-futura">
            Explore a variety of consultations tailored for your spiritual
            journey.
          </p>
        </div>

        <div className="relative group" data-aos="fade-up">
          <div className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 z-10">
            <button className="swiper-button-prev !static flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg transform transition-transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 z-10">
            <button className="swiper-button-next !static flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg transform transition-transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="px-2">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="pb-12"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-md overflow-hidden backdrop-blur-sm 
                              hover:from-yellow-400 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 font-futura"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm opacity-80 mb-4">
                        {service.description}
                      </p>
                      <button className="text-sm font-semibold hover:text-yellow-400 transition-colors">
                        READ MORE
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-pagination !bottom-0"></div>
          </div>
        </div>
      </div>

      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }

        .swiper-pagination-bullet {
          background: #F59E0B;
          opacity: 0.5;
          width: 8px;
          height: 8px;
          margin: 0 4px;
        }

        .swiper-pagination-bullet-active {
          background: #F59E0B;
          opacity: 1;
          width: 24px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
} 