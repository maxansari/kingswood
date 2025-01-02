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
import thum2 from "../../public/assets/school/thum2.jpeg"
import thum4 from "../../public/assets/school/thum4.jpeg"
import thum7 from "../../public/assets/school/thum7.jpg"
import thum9 from "../../public/assets/school/thum9.jpg"
import thum10 from "../../public/assets/school/thum10.jpeg"

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
      className='w-full h-[200px] stackDown sm:h-[250px] md:h-[400px] lg:h-[500px] mx-auto'
    >
      <SwiperSlide >
        <div className='flex justify-center  items-center h-full'>
          <Image className='object-contain -z-10' src={thum10} alt="thum10"  />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className='flex justify-center  items-center h-full'>
          <Image className='object-contain -z-10' src={thum2} alt="thum2"  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center h-full'>
          <Image className='object-contain -z-10' src={thum4} alt="thum4"  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center h-full'>
          <Image className='object-contain' src={thum7} alt="thum7"  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex justify-center items-center h-full'>
          <Image className='object-contain' src={thum9} alt="thum9"  />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}


export default Slideshow;