import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import serviceCard1 from '../assets/images/service1.webp';
import serviceCard2 from '../assets/images/service2.webp';
import serviceCard3 from '../assets/images/service3.webp';
import serviceCard4 from '../assets/images/service4.webp';
// import serviceCard5 from '../assets/service5.webp';

const services = [
  {
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
    title: "Tarot Card Reading",
    description: "Unlock the mysteries of your future with our comprehensive tarot card readings and spiritual guidance."
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    title: "Angel Reading",
    description: "Connect with your guardian angels and receive divine guidance for your life's journey."
  },
  {
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=500&fit=crop",
    title: "Crystal Healing",
    description: "Experience the healing power of crystals to balance your energy and promote wellness."
  },
  {
    image: "https://images.unsplash.com/photo-1551991180-8d5480d5b26d?w=500&h=500&fit=crop",
    title: "Vastu Consultation",
    description: "Harmonize your living space with ancient principles for better energy flow and prosperity."
  },
  {
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=500&h=500&fit=crop",
    title: "Numerology",
    description: "Discover how numbers influence your life path and unlock your true potential."
  },
  {
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500&h=500&fit=crop",
    title: "Astrological Predictions",
    description: "Get insights into your future through the ancient wisdom of astrology."
  },
  {
    image: "https://images.unsplash.com/photo-1506935077180-46af676a2f6d?w=500&h=500&fit=crop",
    title: "Signature Analysis",
    description: "Understand your personality and potential through the science of handwriting analysis."
  }
];

export default function ServicesCarousel() {
  return (
<section id="services" className="py-20 bg-black/20 text-white">
  <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
            <div className="mx-4">
              <svg className="w-12 h-8 text-yellow-400" viewBox="0 0 100 60" fill="currentColor">
                <path d="M20 40 Q30 20 40 40 Q50 20 60 40 L65 35 Q55 15 45 35 Q35 15 25 35 Z"/>
              </svg>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
          </div>
          <h2 className="text-4xl font-bold mb-4">Our Services with Consultation</h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
        Explore a variety of consultations tailored for your spiritual journey.
      </p>
    </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl overflow-hidden backdrop-blur-sm 
                        hover:from-yellow-400 hover:to-orange-500 transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
>
              <div
                className="aspect-square overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={(index % 3) * 100 + 200}
              >
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-full object-cover"
    />
  </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm opacity-80 mb-4">
                  {service.description}
                </p>
                <button
                  className="text-sm font-semibold hover:text-yellow-400 transition-colors"
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 100 + 300}
                >
                  READ MORE
  </button>
</div>
            </div>
      ))}
        </div>
  </div>
</section>
  );
}
