"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade'
import school1 from "../../public/assets/temp/school3.jpg";
import Image from 'next/image';
import school2 from "../../public/assets/temp/school4.jpg";
import school3 from "../../public/assets/temp/school5.jpg";


const Slideshow = () => {

    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={100}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        effect="fade"
        autoplay={true}
        className='w-full h-[500px] mx-auto'
        >
        <SwiperSlide ><Image className='object-contain w-[100vw] h-[100vh]' src={school1} alt="school1" /></SwiperSlide>
        <SwiperSlide><Image className='object-contain w-[100vw] h-[100vh]' src={school2} alt="school2" /></SwiperSlide>
        <SwiperSlide><Image className='object-contain w-[100vw] h-[100vh]' src={school3} alt="school3" /></SwiperSlide>
      </Swiper>
    )
}


export default Slideshow;