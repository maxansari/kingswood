"use client"
import {useEffect, useState} from "react";
import Anouncement from "@/components/Anouncement";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../public/assets/logo.png";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Header = () => {

    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Simulate a loading period
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load
      return () => clearTimeout(timer);
    }, []);

    return (
        <>
    <div className={"w-full flex justify-center bg-black h-[50px] "}>
        <div className="w-[80%] flex items-center gap-4">
        <a href="https://www.facebook.com/Kingswood4/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF color="#4267B2"/>
                </a>
         <FaYoutube color="#FF0000"/>
        <div className="flex items-center gap-4">
        <FaPhoneAlt color="#fff"/>
        <span className="text-white">+918057373726</span>
        <span className="text-white">+919758880880</span>
        </div>
        </div>
   </div>
   <div className="h-[180px] w-full flex justify-center">
   <div className="w-[80%]  md:p-4 flex justify-between">
    <div className="flex gap-4">
    <div className="md:w-[100px] w-[80px] flex items-center">
    {loading ? (
      <Skeleton circle className="object-cover" width={100} height={100} />
    ) : (
      <Image src={logo} alt="logo" width={100}/>
    )}
    </div>
    <div 
        onClick={()=>router.push('/')}
        className="cursor-pointer flex flex-col justify-center"
    >
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
        </>
    )
}

export default Header