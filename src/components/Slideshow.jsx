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
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      effect="fade"
      autoplay={{ delay: 3000 }}
      className='w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[500px] mx-auto'
    >
      <SwiperSlide>
        <div className='flex justify-center items-center h-full'>
          <Image className='object-contain' src={school1} alt="school1"  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center h-full'>
          <Image className='object-contain' src={school2} alt="school2"  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center h-full'>
          <Image className='object-contain' src={school3} alt="school3"  />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}


export default Slideshow;