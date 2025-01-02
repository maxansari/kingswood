"use client"
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect,useState } from "react";
import chairman from '../../public/assets/asif-nadeem.jpeg';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import headingLine from '../../public/assets/underline.png';



const Principal = ()=>{
    
const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,    // Trigger animation only once
    threshold: 0.2,       // Percentage of component in view before triggering
  });

  // Trigger animation when the component is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Define animation variants
  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

      const [loading, setLoading] = useState(true);
  
      // Simulate a loading period
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load
        return () => clearTimeout(timer);
      }, []);



    return <>

{
  loading ? (
    <Skeleton className="mt-8 ml-auto mr-32" width={200} height={30} style={{display:'block'}} />
  ) : (
    <h1 className="mt-8 ml-auto mr-32 text-right">Chairman&apos;s Desk</h1>
  )
}
     
  {loading ?
    <Skeleton className="ml-auto mr-20" width={300} height={20} style={{display:'block'}} />
     :
     <Image className="ml-auto mr-20" src={headingLine} alt="heading line" width={300} height={20}/>
}
       

  {loading ? (
    <div className="flex flex-col md:flex-row gap-4 mt-8">
      {/* Left Text Section Skeleton */}
      <div className="flex-[2] w-full p-4 px-12">
      {/* Skeleton for multiple lines */}
      <Skeleton 
        count={5} 
      />
      </div>
      {/* Right Circular Skeleton */}
      <div className="flex-[1] px-8 mr-12 mb-4 flex justify-center items-center">
        <Skeleton circle={true} height={200} width={200} />
      </div>
    </div>
  ) : (
    <motion.div
      ref={ref}                // Attach ref to observe this element
      initial="hidden"         // Initial state before animation starts
      animate={controls}       // Control animation with `controls`
      variants={boxVariants}   // Animation variants
    >
    <div className="flex flex-col md:flex-row gap-4 mt-8">
      {/* Left Text Section */}
      <div className="flex-[2] flex justify-end items-start w-full p-4 text-left px-12">
        <p>
          With a determination to once again embark upon the mission of
          excellence and well prepared with the supreme art to inspire hope,
          ignite the imagination and to instil joy in creative expression and
          knowledge, we all, at KPS Bulandshahr extend to you a warm welcome for
          the new session 2025-2026.
        </p>
      </div>
      {/* Right Circular Image */}
      <div className="flex-[1] px-8 mr-12 mb-4 flex justify-center items-center">
        <Image
          className="rounded-full"
          width={200}
          src={chairman}
          alt="principal"
        />
      </div>
    </div>
</motion.div>
  )}

        </>

}


export default Principal;
