"use client"

import Marquee from "react-fast-marquee";



const Anouncement = () => {
    return (
        <Marquee pauseOnHover={true} pauseOnClick={true} gradient={false}>
            <div className='text-white bg-red-500 p-2'>This is a very important anouncement</div>
            <div className='text-white bg-blue-500 p-2'>This is a very important anouncement</div>
            <div className='text-white bg-green-500 p-2'>This is a very important anouncement</div>
            <div className='text-white bg-yellow-500 p-2'>This is a very important anouncement</div>
            <div className='text-white bg-pink-500 p-2'>This is a very important anouncement</div>
            <div className='text-white bg-teal-500 p-2'>This is a very important anouncement</div>
        </Marquee>
    )
}


export default Anouncement;


