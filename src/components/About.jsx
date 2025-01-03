"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import headingLine from "../../public/assets/underline.png";

import schoolAbout from "../../public/assets/schoolabout.svg";

const About = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a loading period
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load
    return () => clearTimeout(timer);
  }, []);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Percentage of component in view before triggering
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
    <div>
      {loading ? (
        <div>
          <Skeleton width={150} />
          <Skeleton width={300} height={20} />
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 py-4 px-12">
            <Skeleton count={5} />
          </div>
          <div className="w-full flex-1">
            <Skeleton height={200} />
          </div>
        </div>
        </div>
      ) : (
        <div>
                  <h1 className="text-white roboto text-center text-xl sm:text-3xl md:text-4xl md:text-left">About KPS</h1>
                  <Image className="mx-auto md:mx-0 w-[150px] sm:w-[180px] md:w-[200px] lg-[250px]" src={headingLine} alt="heading line"/>
        <motion.div
          ref={ref} // Attach ref to observe this element
          initial="hidden" // Initial state before animation starts
          animate={controls} // Control animation with `controls`
          variants={boxVariants} // Animation variants
        >
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 py-4 px-12">
              <p className="text-white">
                Kingswood Public School is affiliated with the CBSE board and is
                dedicated to fostering excellence in education from nursery
                through to 8th grade. Operated with a commitment to holistic
                learning and managed by a team of experienced educators,
                Kingswood Public School aims to nurture students intellectual
                and personal growth. The institution is guided by a philosophy
                of quality education, blending modern teaching methods with
                strong ethical values to prepare students for a bright future.
              </p>
            </div>
            <div className="w-full flex-1">
              <Image width={500} src={schoolAbout} alt="schoolAbout" />
            </div>
          </div>
        </motion.div>
        </div>
      )}
    </div>
  );
};

export default About;
