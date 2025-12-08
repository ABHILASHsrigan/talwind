import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Blog = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current = new window.Swiper('.myBlogSwiper', {
                slidesPerView: 1,
                spaceBetween: 25,
                loop: true,
                grabCursor: true,
                breakpoints: {
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 3 },
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    }, []);

    return (
        <section className="py-20 px-6 bg-white">
            {/* Heading */}
            <div className="text-center">
                <h2 className="text-3xl font-bold">Blog</h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                    Check out my recent blog posts where I share insights on design,
                    development, and the latest industry trends.
                </p>
            </div>



            {/* Slider */}
            <div className="mt-18 max-w-5xl mx-auto">
                <div className="swiper myBlogSwiper" ref={swiperRef}>
                    <div className="swiper-wrapper">
                        {/* CARD 1 */}
                        <SwiperSlide className="swiper-slide">
                            <div className="bg-white shadow-md rounded-xl overflow-hidden">
                                <div className="w-full h-48 overflow-hidden">
                                    <img
                                        src="blog-1.jpg"   // <-- replace with your image URL
                                        alt="Blog"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-5">
                                    <p className="text-gray-400 text-sm">
                                        22 Oct, 2020 / 246 Comments
                                    </p>
                                    <h3 className="mt-2 font-semibold text-gray-800">
                                        Tips for Effective Dashboard Layouts and…
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* CARD 2 */}
                        <SwiperSlide className="swiper-slide">
                            <div className="bg-white shadow-md rounded-xl overflow-hidden">
                                <div className="w-full h-48 overflow-hidden">
                                    <img
                                        src="blog-2.jpg"   // <-- replace with your image URL
                                        alt="Blog"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-5">
                                    <p className="text-gray-400 text-sm">
                                        22 Oct, 2020 / 246 Comments
                                    </p>
                                    <h3 className="mt-2 font-semibold text-gray-800">
                                        How to Visualize Data for Better Product…
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* CARD 3 */}
                        <SwiperSlide className="swiper-slide">
                            <div className="bg-white shadow-md rounded-xl overflow-hidden">
                                <div className="w-full h-48 overflow-hidden">
                                    <img
                                        src="blog-3.jpg"   // <-- replace with your image URL
                                        alt="Blog"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-5">
                                    <p className="text-gray-400 text-sm">
                                        22 Oct, 2020 / 246 Comments
                                    </p>
                                    <h3 className="mt-2 font-semibold text-gray-800">
                                        Responsive Design: Adapting to All Devices…
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* CARD 4 */}
                        <SwiperSlide>
                            <div className="bg-white shadow-md rounded-xl overflow-hidden 
                                                    hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-2 
                                                        transition-all duration-300 cursor-pointer">

                                <div className="w-full h-48 overflow-hidden">
                                    <img
                                        src="blog-4.jpg"   // <-- replace with your image URL
                                        alt="Blog"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-5">
                                    <p className="text-gray-400 text-sm">22 Oct, 2020 / 246 Comments</p>
                                    <h3 className="mt-2 font-semibold text-gray-800">
                                        Tips for Effective Dashboard Layouts and…
                                    </h3>
                                </div>

                            </div>


                        </SwiperSlide>






                    </div>
                </div>
            </div>


        </section>
    );
};

export default Blog;
