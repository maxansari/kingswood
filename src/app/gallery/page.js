"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const Gallery = () => {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center flex-col items-center">
        <h1 className="text-center mt-10">Gallery</h1>
        <Image className="ali" src={underLine} alt="underline" width={200} />
      </div>
      <div className="flex justify-center mx-auto">
        <div className="w-[80%]">
          <div className="grid grid-cols-2 mt-10 md:grid-cols-4 gap-4">
            {[thum10,thum11,thum1, thum2, thum3, thum4, thum5, thum6, thum7, thum8, thum9].map((thumb, index) => (
              <div
                key={index}
                className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden"
              >
                {/* Open image in browser viewer */}
                <a href={thumb.src} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={thumb}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
