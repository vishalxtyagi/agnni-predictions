import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CrownDecoration from './CrownDecoration';
import Service1 from '../assets/images/service1.webp';
import Service2 from '../assets/images/service2.webp';
import Service3 from '../assets/images/service3.webp';
import Service4 from '../assets/images/service4.webp';

interface Course {
  image: string;
  title: string;
  description: string;
}

const courses: Course[] = [
  {
    image: Service1,
    title: "Tarot Card Reading",
    description: "Master the art of tarot with our comprehensive course covering all 78 cards, spreads, and intuitive reading techniques.",
  },
  {
    image: Service2,
    title: "Angel Healing Course",
    description: "Connect with angelic energies and learn powerful healing techniques for spiritual growth and transformation.",
  },
  {
    image: Service3,
    title: "Crystal Healing",
    description: "Harness the metaphysical power of crystals for healing, protection, and spiritual enhancement practices.",
  },
 
];

const CourseSlider = () => {
  return (
    <section
      id="courses"
      className="py-8 bg-black/20 backdrop-blur-sm"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <CrownDecoration className="w-12 h-8 text-yellow-400 mx-auto mb-4" />
          <h2
            className="text-4xl font-bold mb-4 font-britannic"
            data-aos="fade-up "
          >
            Our Courses
          </h2>
          <p
            className="font-futura text-xl opacity-80"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Discover our comprehensive courses designed to help you master the
            mystical arts.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="course-slider overflow-visible pb-16"
          >
            {courses.map((course, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-[500px] bg-transparent border-dotted border-4 rounded-md overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-2xl backdrop-blur-sm flex flex-col"
                  style={{ borderSpacing: "10px" }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="h-full overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-white font-britannic">
                        {course.title}
                      </h3>
                      <p className="mb-6 opacity-90 text-base leading-relaxed text-white font-futura">
                        {course.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <button className="w-full px-6 text-white bg-gradient-to-r from-yellow-500 to-orange-800 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Add Course Button */}
          <div className="flex justify-center mt-8">
            <button className="px-8 py-3 border-2 border-dotted border-white/50 rounded-full text-white hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm">
              + Add Course
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .course-slider {
          padding-bottom: 4rem !important;
        }
        .course-slider .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
        }
        .course-slider .swiper-pagination-bullet-active {
          background: #FBBF24;
        }
        .course-slider .swiper-button-next,
        .course-slider .swiper-button-prev {
          color: #FBBF24;
        }
        .course-slider .swiper-button-next:after,
        .course-slider .swiper-button-prev:after {
          font-size: 1.5rem;
        }
      `}</style>
    </section>
  );
};

export default CourseSlider;