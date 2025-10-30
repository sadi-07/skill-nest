import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import banner01 from "../assets/banner-1.jpg"
import banner02 from "../assets/banner-2.jpg"
import banner03 from "../assets/banner-3.jpg"
import banner04 from "../assets/banner-4.jpg"
import banner05 from "../assets/banner-5.jpg"


const Banner = () => {
    return (
        <div className='bg-base-100'>
            <div className=''>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className=""
            >
                <SwiperSlide>
                    <img className='w-screen h-60 md:h-140' src={banner01} alt="Skill Exchange" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-screen h-60 md:h-140' src={banner02} alt="Skill Exchange" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-screen h-60 md:h-140' src={banner03} alt="Skill Exchange" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-screen h-60 md:h-140' src={banner04} alt="Skill Exchange" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-screen h-60 md:h-140' src={banner05} alt="Skill Exchange" />
                </SwiperSlide>
               
            </Swiper>

        </div>
        </div>
    );
};

export default Banner;