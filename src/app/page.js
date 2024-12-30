"use strict";
import Principal from "@/components/Principal";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../public/assets/logo.png";
import Navbar from "@/components/Navbar";
import Slideshow from "@/components/Slideshow";
import Anouncement from "@/components/Anouncement";
import pricipal from '../../public/assets/Principal.svg';
import About from "@/components/About";
import headingLine from '../../public/assets/underline.png';

export default function Home() {






  return (
   <>
   <div className={"w-full flex justify-center bg-black h-[50px] "}>
        <div className="w-[80%] flex items-center gap-4">
        <FaFacebookF color="#4267B2"/>
        <FaYoutube color="#FF0000"/>
        <div className="flex items-center gap-4">
        <FaPhoneAlt color="#fff"/>
        <span className="text-white">+91 1234567890</span>
        <span className="text-white">+91 1234567890</span>
        <span className="text-white">+91 1234567890</span>
        </div>
        </div>
   </div>
   <div className="h-[180px] w-full flex justify-center">
   <div className="w-[80%]  md:p-4 flex justify-between">
    <div className="flex gap-4">
    <div className="md:w-[100px] w-[80px] flex items-center">
    <Image src={logo} alt="logo" width={100}/>
    </div>
    <div className="flex flex-col justify-center ">
    <h1 className="text-sm md:text-xl lg:text-2xl font-bold text-teal-800">Kingswood Public School</h1>
    <p className="text-teal-700">Bulandshahr</p>
    </div>
    </div>
    <div className="flex items-center gap-4 z-1000">
      <Navbar/>
      
      </div>
   </div>
   </div>
   <div>

    <Anouncement />

   </div>

   <div className="w-full flex justify-center">
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
            
            <h1 className="mt-8 mr-32 text-right">Principal&apos;s Desk</h1>
            <Image className="absolute right-[100px]" src={headingLine} alt="heading line" width={300} height={20}/>

          <Principal/>
         
     </div>


    </div>
    <div className="flex justify-center">
    <div className="w-[80%]">
      <h1>Gallery</h1>
      <Image src={headingLine} alt="heading line" width={300} height={20}/>
        <div className="grid grid-cols-2 mt-10 md:grid-cols-4 gap-4">
       {Array.from({ length: 5 }).map((_, index) => (
    <div key={index} className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden">
      <Image
        src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${index+1}.jpg`}
        alt=""
        fill
        className="object-cover"
      />
    </div>
  ))}
      <button className="bg-teal-500 text-white font-bold">Go To Gallery-&gt;</button>
      
  </div>
      </div>
    </div>
  
    <div>
        <section className="spikes pb-6 text-white mt-8 flex justify-center">
            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 z-[1000]">
                <div>
                    <h1>About KPS</h1>
                    <ul className="px-4">
                        <li>Faculty Members</li>
                        <li>Career</li>
                        <li>Photo Gallery</li>
                    </ul>
                </div>
                 <div>
                    <h1>Reach Us</h1>
                    <div className="px-4">
                    <p>Kingswood Public School, Bulandshahr(UP)</p>
                    <p>Pin Code: 203001</p>
                    <p>+91 9457077164</p>
                    <p>contact_us@kingswood.com</p>
                    </div>
                </div>
                 <div>
                    <h1>Location Map</h1>
                    <iframe className="w-[300px] h-[200px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4011.8123693297543!2d77.83219191155952!3d28.413417375684205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ca353589f1623%3A0xfec56659a5810cf9!2sKINGSWOOD%20PUBLIC%20SCHOOL!5e1!3m2!1sen!2sin!4v1731587925142!5m2!1sen!2sin" allowFullScreen="true" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
 
            </div>
      </section>
    </div>


   </>
  );
}
