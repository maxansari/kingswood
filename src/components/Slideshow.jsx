"use client";
import { useEffect, useState } from "react";
import { db } from "../../libs/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { shimmer, toBase64 } from '../utils/shimmer';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade'
import school1 from "../../public/assets/temp/school3.jpg";
import Image from 'next/image';

import thum2 from "../../public/assets/school/thum2.jpeg"
import thum4 from "../../public/assets/school/thum4.jpeg"
import thum7 from "../../public/assets/school/thum7.jpg"
import thum10 from "../../public/assets/school/thum10.jpeg"
import thum12 from "../../public/assets/school/thum12.jpeg"
import thum14 from "../../public/assets/school/thum14.jpeg"
import thum18 from "../../public/assets/school/thum18.jpg"
import thum16 from "../../public/assets/school/thum16.jpg"

const images = [
  { src: thum12, alt: "thum12" },
  { src: thum10, alt: "thum10" },
  { src: thum16, alt: "thum16" },
  { src: thum18, alt: "thum18" },
  { src: thum14, alt: "thum14" },
  { src: thum2, alt: "thum2" },
  { src: thum4, alt: "thum4" },
  { src: thum7, alt: "thum7" },
];

const Slideshow = () => {

  const [loading, setLoading] = useState(true);
  const [slides, setSlides] = useState([]);

  // Simulate a loading period
  useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load
      return () => clearTimeout(timer);
  }, []);

  const getSlides = async () => {
          const slidesCol = collection(db, 'slideshow');
          const slidesSnapshot = await getDocs(slidesCol);
          const slidesList = slidesSnapshot.docs.map(doc => doc.data());
          setSlides(slidesList);
      }

  useEffect(() => {
    getSlides();
  }
  ,[]);




  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={() => console.log("Slide changed")}
      onSwiper={(swiper) => console.log(swiper)}
      effect="fade"
      autoplay={{ delay: 3000 }}
      className="w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[500px] mx-auto"
    >
      {slides.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center items-center h-full">
          <Image
              className="object-contain"
              src={image.image_url}
              alt={image.public_id}
              placeholder="blur" // Enable blur effect
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`} // Replace with shimmer effect
             fill
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slideshow;