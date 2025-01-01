"use client";
import { useState,useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useRouter,usePathname } from "next/navigation";
import Link from "next/link";


const Navbar = () => {
    const [active, setActive] = useState(0);
    const [hover, setHover] = useState(0);
    const router = useRouter();
    const path = usePathname();

    useEffect(() => {
        if(path=='/'){
            setActive(0);
        }else if(path=='/about'){
            setActive(1);
        }
        else if(path=='/contact'){
            setActive(4);
        }
    }, [path]);

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

        
  


    return (
        <>
        <nav className="hidden z-1000 w-[700px] md:flex items-center p-4">
            <ul className="w-full flex gap-4 font-bold text-blue-900 relative">
            <li 
                onMouseEnter={()=>setHover(0)} 
                onMouseLeave={()=>setHover(active)} 
                onClick={()=>router.push('/')}
                className="flex-1 text-center cursor-pointer p-2 transition-all ease-in"
                >Home</li>
            <li 
                onMouseEnter={()=>setHover(1)} 
                onMouseLeave={()=>setHover(active)} 
                onClick={()=>router.push('/about')}
                className="flex-1 cursor-pointer text-center p-2 transition-all ease-in"
            >About Us</li>
            <li onMouseEnter={()=>setHover(2)} onMouseLeave={()=>setHover(active)} className="flex-1 cursor-pointer text-center p-2 transition-all ease-in relative">Academics
                <ul className={`absolute top-full left-0 bg-blue-900 text-white text-left w-[300px] origin-top scale-y-0 ${hover==2?'scale-y-100':''} transition-all ease-in`}>
                <li className="hover:bg-teal-400 p-2 hover:text-black">Addmission</li>
                <li className="hover:bg-teal-400 p-2 hover:text-black">Facilities</li>
                </ul>
            </li>
            <li 
                onMouseEnter={()=>setHover(3)} 
                onMouseLeave={()=>setHover(active)}
                onClick={()=>router.push('/gallery')} 
                className="flex-1 cursor-pointer text-center p-2 transition-all ease-in"
            >Gallery</li>
            <li 
            onMouseEnter={()=>setHover(4)} 
            onMouseLeave={()=>setHover(active)} 
            onClick={()=>router.push('/contact')}
            className="flex-1 cursor-pointer text-center p-2 transition-all ease-in"
            >Contact Us</li>
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
        <div className="z-1000 md:hidden absolute top-0 left-0 flex w-full bg-blue-900 text-white p-4">
            <ul className="flex flex-col gap-4 w-full">
                <li 
                    onClick={()=>router.push('/')}
                    className="cursor-pointer"
                >Home</li>
                <li 
                    onClick={()=>router.push('/about')}
                    className="cursor-pointer"
                    >About Us</li>
                <li 
                    className="cursor-pointer flex justify-between w-full"
                    >Academics <FaCaretDown /></li>
                <li 
                    onClick={()=>router.push('/gallery')}
                    className="cursor-pointer"
                    >Gallery</li>
                <li 
                    onClick={()=>router.push('/contact')}
                    className="cursor-pointer"
                    >Contact Us</li>
            </ul>
            <button onClick={handleClick} 
  className="flex md:hidden flex-col justify-center items-center absolute top-4 right-4">
    <div className="relative">
        <span className={`bg-white block origin-center transition-all duration-300 ease-out 
                        h-1 w-6 rounded-sm ${isOpen ? 
                        'rotate-45' : '-translate-y-0.5'
                        }`} >
        </span>
        <span className={`bg-white block transition-all duration-300 ease-out 
                        h-1 w-6 rounded-sm my-0.5 ${isOpen ? 
                        'opacity-0' : 'opacity-100'
                        }`} >
        </span>
        <span className={`bg-white block origin-center transition-all duration-300 ease-out 
                        h-1 w-6 rounded-sm ${isOpen ? 
                        '-rotate-45 absolute top-0 ' : 'translate-y-0.5'
                        }`}>
        </span>    
    </div>
  </button>
        </div>
    )}

        </>
    );
    }


export default Navbar;