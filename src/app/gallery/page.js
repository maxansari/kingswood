"use client";
import { useState,useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { db } from "../../../libs/firebaseConfig";
import { collection, getDocs,query,doc,limit,orderBy } from "firebase/firestore";

import underLine from "../../../public/assets/underline.png";
import Image from "next/image";
import thum1 from "../../../public/assets/school/thum1.jpeg";
import thum2 from "../../../public/assets/school/thum2.jpeg";
import thum3 from "../../../public/assets/school/thum3.jpeg";
import thum4 from "../../../public/assets/school/thum4.jpeg";
import thum5 from "../../../public/assets/school/thum5.jpeg";
import thum6 from "../../../public/assets/school/thum6.jpeg";
import thum7 from "../../../public/assets/school/thum7.jpg";
import thum8 from "../../../public/assets/school/thum8.jpg";
import thum9 from "../../../public/assets/school/thum9.jpg";
import thum10 from "../../../public/assets/school/thum10.jpeg";
import thum11 from "../../../public/assets/school/thum11.jpeg";
import thum12 from "../../../public/assets/school/thum12.jpeg";
import thum13 from "../../../public/assets/school/thum13.jpeg";
import thum14 from "../../../public/assets/school/thum14.jpeg";
import thum15 from "../../../public/assets/school/thum15.jpeg";
import thum16 from "../../../public/assets/school/thum16.jpeg";
import thum17 from "../../../public/assets/school/thum17.jpeg";
import thum18 from "../../../public/assets/school/thum18.jpeg";

// const images = [
//   { src: thum12, alt: "Image 12" },
//   { src: thum13, alt: "Image 13" },
//   { src: thum14, alt: "Image 14" },
//   { src: thum15, alt: "Image 15" },
//   { src: thum16, alt: "Image 16" },
//   { src: thum17, alt: "Image 17" },
//   { src: thum18, alt: "Image 18" },
//   { src: thum10, alt: "Image 10" },
//   { src: thum11, alt: "Image 11" },
//   { src: thum1, alt: "Image 1" },
//   { src: thum2, alt: "Image 2" },
//   { src: thum3, alt: "Image 3" },
//   { src: thum4, alt: "Image 4" },
//   { src: thum5, alt: "Image 5" },
//   { src: thum6, alt: "Image 6" },
//   { src: thum7, alt: "Image 7" },
//   { src: thum8, alt: "Image 8" },
//   { src: thum9, alt: "Image 9" },
// ];

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; // Images per page
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => { 
    try {
      const imagesCollection = collection(db, "gallery");
      const imagesQuery = query(imagesCollection, orderBy("uploadedAt", "desc"), limit(itemsPerPage));
      const querySnapshot = await getDocs(imagesQuery);
      const imagesList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setImages(imagesList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);



  // Simulate a loading period
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load
    return () => clearTimeout(timer);
  }, []);

  const currentImages = images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Header />
      
      
      {loading?
      <>
      <div className="w-full flex justify-center flex-col items-center">
        <Skeleton width={150} height={20} />
        <Skeleton width={200} height={20} />
      </div>

        <div className="flex justify-center mx-auto">
          <div className="w-[80%]">
            <div className="grid grid-cols-2 mt-10 md:grid-cols-4 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden"
                >
                  <Skeleton className="object-cover h-[200px]" />
                </div>
              ))}
            </div>
          </div>
        </div>



      </>
      
      :<><div className="w-full flex justify-center flex-col items-center">
        <h1 className="text-center mt-10">Gallery</h1>
        <Image className="ali" src={underLine} alt="underline" width={200} />
      </div>
      <div className="flex justify-center mx-auto">
        <div className="w-[80%]">
          <div className="grid grid-cols-2 mt-10 md:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden"
              >
                <a href={img.image_url.src} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={img.image_url}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </a>
              </div>
            ))}
          </div>
          {/* Pagination Controls */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={() => handlePageChange("prev")}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-teal-500 text-white"
              }`}
            >
              Previous
            </button>
            <span className="px-4 py-2 rounded bg-gray-200">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange("next")}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-teal-500 text-white"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div></>}
      <Footer />
    </>
  );
};

export default Gallery;
