"use strict";
import Principal from "@/components/Principal";
import Image from "next/image";
import Slideshow from "@/components/Slideshow";
import About from "@/components/About";
import headingLine from '../../public/assets/underline.png';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";




export default function Home() {

  




  return (
   <>
    <div className="z-10">
    <Header/>
    </div>
   <div className="w-full flex justify-center z-1">
    <Slideshow />
    </div>

    <div className="w-full relative min-h-[50vh] containerAbout">
        <div className="custom-shape-divider-top-1730623775">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
    </div>

    <div className="w-[80%] mx-auto">

          <div className="mt-4 relative w-full">
        
          <h1 className="text-white roboto text-center md:text-left">About KPS</h1>
          <Image className="mx-auto md:mx-0" src={headingLine} alt="heading line" width={300} height={20}/>
            <About/>
            
          </div>

          <div className="custom-shape-divider-bottom-1730628643 hidden md:block">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="custom-shape-divider-bottom-1730628643 block md:hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

    </div>
    </div>
    <div className="w-full">

        <div className="w-[80%] mx-auto relative">
            
            <h1 className="mt-8 mr-32 text-right">Chairman&apos;s Desk</h1>
            <Image className="absolute right-[100px]" src={headingLine} alt="heading line" width={300} height={20}/>

          <Principal/>
         
     </div>


    </div>

    <Gallery/>
  
    <Footer/>


   </>
  );
}
