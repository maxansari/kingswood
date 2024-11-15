"use client"
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import schoolAbout from '../../public/assets/schoolabout.svg';


const About = () => {

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



  return (
    <motion.div
    ref={ref}                // Attach ref to observe this element
    initial="hidden"         // Initial state before animation starts
    animate={controls}       // Control animation with `controls`
    variants={boxVariants}   // Animation variants
    >
        <div className={"flex "}>
              <div className="flex-1 py-4 px-12">
                <p className="text-white">Kingswood Public School is affiliated with the CBSE board and is dedicated to fostering excellence in education from nursery through to 8th grade. Operated with a commitment to holistic learning and managed by a team of experienced educators, Kingswood Public School aims to nurture students' intellectual and personal growth. The institution is guided by a philosophy of quality education, blending modern teaching methods with strong ethical values to prepare students for a bright future.</p>
              </div>
              <div className="w-full flex-1">
                <Image width={500} src={schoolAbout} alt="schoolAbout" />
              </div>

            </div>
    </motion.div>
  )
}

export default About