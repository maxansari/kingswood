"use client";
import { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState(0);
    const [hover, setHover] = useState(0);

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
  


    return (
        <>
        <nav className="hidden w-[700px] md:flex items-center p-4">
            <ul className="w-full flex gap-4 font-bold text-blue-900 relative">
            <li className="flex-1 text-center p-2 transition-all ease-in">Home</li>
            <li onMouseEnter={()=>setHover(1)} onMouseLeave={()=>setHover(active)} className="flex-1 text-center p-2 transition-all ease-in">About Us</li>
            <li onMouseEnter={()=>setHover(2)} onMouseLeave={()=>setHover(active)} className="flex-1 text-center p-2 transition-all ease-in">Academics</li>
            <li onMouseEnter={()=>setHover(3)} onMouseLeave={()=>setHover(active)} className="flex-1 text-center p-2 transition-all ease-in">Gallery</li>
            <li onMouseEnter={()=>setHover(4)} onMouseLeave={()=>setHover(active)} className="flex-1 text-center p-2 transition-all ease-in">Contact Us</li>
                <div className={`${hover==0?'left-0':
                hover==1?'left-[20%]':
                hover==2?'left-[40%]':
                hover==3?'left-[60%]':
                hover==4?'left-[80%]':'left-0'
            } transition-all ease-in absolute
                w-[20%] h-1 bottom-0 bg-blue-900`}></div>
            </ul>
        </nav>

{/* hamburger menu */}
        
<button onClick={handleClick} 
  className="flex md:hidden flex-col justify-center items-center">
        <span className={`bg-blue-900 block transition-all duration-300 ease-out 
                        h-1 w-6 rounded-sm ${isOpen ? 
                        'rotate-45 translate-y-1' : '-translate-y-0.5'
                        }`} >
        </span>
        <span className={`bg-blue-900 block transition-all duration-300 ease-out 
                        h-1 w-6 rounded-sm my-0.5 ${isOpen ? 
                        'opacity-0' : 'opacity-100'
                        }`} >
        </span>
        <span className={`bg-blue-900 block transition-all duration-300 ease-out 
                        h-1 w-6 rounded-sm ${isOpen ? 
                        '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                        }`}>
        </span>    

  </button>
    
    {isOpen && (
        <div className="md:hidden absolute top-0 left-0 flex h-full w-full bg-blue-900 text-white p-4">
            <ul className="flex flex-col gap-4">
                <li className="text-center">Home</li>
                <li>About Us</li>
                <li>Academics</li>
                <li>Gallery</li>
                <li>Contact Us</li>
            </ul>
            <button onClick={handleClick} 
  className="flex md:hidden flex-col justify-center items-center absolute top-4 right-4">
        <span className={`bg-orange-500 block transition-all duration-300 ease-out 
                        h-1 w-6 rounded-sm ${isOpen ? 
                        'rotate-45 translate-y-1' : '-translate-y-0.5'
                        }`} >
        </span>
        <span className={`bg-orange-500 block transition-all duration-300 ease-out 
                        h-1 w-6 rounded-sm my-0.5 ${isOpen ? 
                        'opacity-0' : 'opacity-100'
                        }`} >
        </span>
        <span className={`bg-orange-500 block transition-all duration-300 ease-out 
                        h-1 w-6 rounded-sm ${isOpen ? 
                        '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                        }`}>
        </span>    

  </button>
        </div>
    )}

        </>
    );
    }


export default Navbar;