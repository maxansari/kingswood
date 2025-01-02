"use client"
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Marquee from "react-fast-marquee";
import Nw from '../../public/blink_new.gif';
import Image from "next/image";


const Anouncement = () => {

    const [loading, setLoading] = useState(true);

    // Simulate a loading period
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        {loading ? 
                <Skeleton className="-z-10 bg-blue-900" height={30} />
             : 
        <Marquee className="-z-10 bg-blue-900" pauseOnHover={true} pauseOnClick={true} gradient={false}>
            <div className='text-white bg-red-500 flex gap-2 p-2'><Image className="bg-white" src={Nw} width={20} alt="new" ></Image> Addmission Open for 2025-2026 </div>
            {/* <div className='text-white bg-red-500 p-2'></div> */}
            {/* <div className='text-white bg-green-500 p-2'></div>
            <div className='text-white bg-yellow-500 p-2'>This is a very important anouncement</div>
            <div className='text-white bg-pink-500 p-2'>This is a very important anouncement</div>
            <div className='text-white bg-teal-500 p-2'>This is a very important anouncement</div> */}
        </Marquee>}
        </>
    )
}


export default Anouncement;


