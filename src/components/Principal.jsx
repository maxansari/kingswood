"use client"
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import pricipal from '../../public/assets/Principal.svg';


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



    return <>
        <motion.div
            ref={ref}                // Attach ref to observe this element
            initial="hidden"         // Initial state before animation starts
            animate={controls}       // Control animation with `controls`
            variants={boxVariants}   // Animation variants
            >
            <div className="flex gap-4 mt-8">
              <div className="w-1/2 flex justify-center items-center px-12">
              <p>With a determination to once again embark upon the mission of excellence and well prepared with the supreme art to inspire hope, ignite the imagination and to instil joy in creative expression and knowledge, we all, at KPS Bulandshahr extend to you a warm welcome for the new session 2023-2024.</p>
              </div>
              <div className="w-1/2 px-8 mr-12 mb-4 flex justify-center items-center">
                <Image width={200} src={pricipal} alt="pricipal" />
                </div>
                </div>
        </motion.div>
        </>

}


export default Principal;
