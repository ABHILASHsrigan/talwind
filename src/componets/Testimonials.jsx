import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800">Testimonial</h2>

      <p className="text-gray-600 max-w-xl mx-auto mt-3">
      professional , reliable ,and creative -everything you want a in a developer partnner
      </p>

      <div className="max-w-3xl mx-auto mt-5">
        <Swiper
        //   modules={[Pagination, Autoplay]}
        //   loop={true}
        //   autoplay={{ delay: 3000 }}
        //   pagination={{ clickable: true }}
        //   className="py-8 mt-25"
        >
          <SwiperSlide>
            <div>
              <p className="text-lg text-gray-700 italic">
                "They deliverd our project on time and went above any beyond to ensure
                our satisafaction . the new features have made a significant difference for our 
                users . we look forward to wroking together again "
              </p>
              <h3 className="mt-5 font-semibold text-gray-900">
                Elon max
              </h3>
              <p className="text-gray-500 text-sm">Managing Director, kFC Company</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <p className="text-lg text-gray-700 italic">
              "The team demonstrated a deep understanding of our requirements and delivered a solution 
              that was both visually appealing and highly functional. 
              Communication was clear throughout the project."
            </p>
            <h3 className="mt-5 font-semibold text-gray-900">Ali Haider</h3>
            <p className="text-gray-500 text-sm">coo, XYZ company </p>
          </SwiperSlide>

          <SwiperSlide>
            <p className="text-lg text-gray-700 italic">
              "From the initial consultation to the final delivery, 
              every step was handled professionally. 
              The end result was a product that not only met our needs but also impressed our stakeholders. 
              Highly recommended!"
            </p>
            <h3 className="mt-5 font-semibold text-gray-900">Esther Howard </h3>
            <p className="text-gray-500 text-sm"> Managing Director , ABC Company </p>
            
          </SwiperSlide>

        </Swiper>
      </div>
      
    </section>
  );
};

export default Testimonials;
