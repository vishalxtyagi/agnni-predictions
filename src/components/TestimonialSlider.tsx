import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Meera S.",
    role: "CLIENT",
    rating: 5,
    text: "Her tarot reading opened my eyes. It was accurate, empathetic, and truly magical.",
    location: "Pune",
  },
  {
    name: "Tanya A.",
    role: "CLIENT",
    rating: 5,
    text: "The crystal healing session helped me overcome months of anxiety. Thank you, Pranjal ji.",
    location: "Dubai",
  },
  {
    name: "Reema M.",
    role: "CLIENT",
    rating: 5,
    text: "Her angel reading was like talking to a divine friend. Highly recommend!",
    location: "Mumbai",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
            <div className="mx-4">
              <svg className="w-12 h-8 text-yellow-400" viewBox="0 0 100 60" fill="currentColor">
                <path d="M20 40 Q30 20 40 40 Q50 20 60 40 L65 35 Q55 15 45 35 Q35 15 25 35 Z"/>
              </svg>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
          </div>
          <h2 className="text-5xl font-bold text-white mb-8">What client are saying</h2>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-slider overflow-visible"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="overflow-visible">
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 p-8 rounded-lg relative overflow-visible mt-8 ml-8">
                {/* Quote mark - positioned half inside, half outside */}
                <div className="absolute -top-6 -left-6">
                  <svg className="w-12 h-12 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {testimonial.name}
                  </h4>
                  {/* <p className="text-purple-200 text-sm font-medium tracking-wider uppercase">
                    {testimonial.role}
                  </p> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .testimonial-slider {
          padding-bottom: 4rem !important;
        }
        .testimonial-slider .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
        }
        .testimonial-slider .swiper-pagination-bullet-active {
          background: #FBBF24;
        }
        .testimonial-slider .swiper-button-next,
        .testimonial-slider .swiper-button-prev {
          color: #FBBF24;
        }
        .testimonial-slider .swiper-button-next:after,
        .testimonial-slider .swiper-button-prev:after {
          font-size: 1.5rem;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;