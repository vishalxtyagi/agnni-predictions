import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CrownDecoration from './CrownDecoration';
import TarotReading from '../assets/images/services/tarot-reading.webp';
import AngelReading from '../assets/images/services/angel-reading.webp';
import CrystalHealing from '../assets/images/services/crystal-healing.webp';
import VastuConsultation from '../assets/images/services/vastu-consultation.webp';
import Numerology from '../assets/images/services/numerology-report.webp';
import AstrologicalPredictions from '../assets/images/services/astrological-predictions.webp';
import TarotCardsDisplay from '../assets/images/services/tarot-cards-display.webp';
import GlowingHands from '../assets/images/services/glowing-healing-hands.webp';
import TarotSpread from '../assets/images/services/tarot-spread.webp';
import AmethystAltar from '../assets/images/services/amethyst-altar.webp';

const services = [
  {
    image: TarotReading,
    title: "Tarot Card Reading",
    description: "Decode energies of past, present & future through divine cards",
    price: "₹1299"
  },
  {
    image: AngelReading,
    title: "Angel Reading",
    description: "Receive divine messages & angelic guidance for your path",
    price: "₹1299"
  },
  {
    image: CrystalHealing,
    title: "Crystal Healing",
    description: "Rebalance chakras and cleanse aura with crystal energies",
    price: "₹1299"
  },
  {
    image: VastuConsultation,
    title: "Vastu Consultation",
    description: "Bring harmony to home/workspace with sacred geometry",
    price: "₹1299"
  },
  {
    image: Numerology,
    title: "Numerology",
    description: "Understand life path through numbers and cosmic vibrations",
    price: "₹1299"
  },
  {
    image: AstrologicalPredictions,
    title: "Astrological Predictions",
    description: "Personalized birth chart predictions for life guidance",
    price: "₹1299"
  },
  {
    image: TarotCardsDisplay,
    title: "Signature Analysis",
    description: "Reading of signature to uncover patterns and personality",
    price: "₹1299"
  },
  {
    image: GlowingHands,
    title: "Kundli Matching",
    description: "Find compatibility for marriage & relationships",
    price: "₹1299"
  },
  {
    image: TarotSpread,
    title: "Personalized Kundli Consultation",
    description: "Decode birth chart for career, love, health insights",
    price: "₹1299"
  },
  {
    image: AmethystAltar,
    title: "Black Magic Removal",
    description: "Protection from negative energies and harmful influences",
    price: "₹1299"
  }
];

export default function ServiceSlider() {
  return (
    <section id="services" className="py-20 bg-black/20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <CrownDecoration className="w-12 h-8 text-yellow-400" />
          <div className="flex justify-center mb-8"></div>
          <h2 className="text-4xl font-bold mb-4 font-britannic">
            Consultation Services
          </h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto font-futura">
            Transform your life with divine guidance from Dr. Pranjal D. Sharma. All services priced at ₹1299.
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
                    className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl overflow-hidden backdrop-blur-sm 
                              hover:from-purple-500/50 hover:to-pink-500/50 transform hover:scale-105 transition-all duration-300 font-futura shadow-xl border border-purple-500/20"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-white">
                          {service.title}
                        </h3>
                        <span className="text-lg font-bold text-purple-300">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-sm opacity-80 mb-4 text-white">
                        {service.description}
                      </p>
                      <a 
                        href="/Consultation"
                        className="inline-block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors"
                      >
                        Book Now
                      </a>
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