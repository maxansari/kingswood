"use client";
import {useState,useEffect} from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import bookRead from "../../../public/bookread.svg";
import underLine from "../../../public/assets/underline.png";
import scene from "../../../public/scene.svg";
import pattern from "../../../public/pattern.svg";
import {motion} from "framer-motion";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const About = () => {

    const [loading, setLoading] = useState(true);

    // Simulate a loading period
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load
        return () => clearTimeout(timer);
    }, []);





    return (
        <div>
            <Header />

        {loading?<div>
        <div className="w-full flex justify-center flex-col items-center">
            <Skeleton width={150} height={20} />
              <Skeleton width={200} height={20} />
            </div>
              <div className="flex flex-col w-[80%] mx-auto mt-10 justify-center md:flex-row ">
                <div className="flex-1 relative py-4 px-4">
                    <Skeleton count={5} />
                </div>
                <div className="w-full flex-1 flex justify-center">
                    <Skeleton width={300} height={200} />
                </div>
                </div>            
                </div>
            :<div><div className="w-full flex justify-center flex-col items-center"> 
                <h1 className="text-center mt-10">About Us</h1>
                <Image className="ali" src={underLine} alt="underline" width={200}/>
            </div>
            <div className="w-full flex-col justify-center items-center">
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="flex flex-col w-[80%] mx-auto mt-10 justify-center md:flex-row ">
                <div className="flex-1 flex relative justify-end py-4 px-4">
                    <p className="">Welcome to Kingswood Public School, a CBSE-affiliated institution committed to fostering academic excellence and holistic development. Catering to students from Nursery to Grade 8, we provide a nurturing and stimulating environment where young minds thrive and grow. At Kingswood, we believe education goes beyond textbooks. Our experienced educators employ modern teaching methodologies while upholding strong ethical values to shape well-rounded individuals. With a focus on intellectual curiosity, creativity, and personal growth, we aim to prepare our students for the challenges of tomorrow.</p>
                </div>
                <div className="w-full flex-1 flex justify-center">
                    <Image width={300} src={bookRead} alt="schoolAbout" />
                </div>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }} 
                className="flex flex-col-reverse w-[80%] mx-auto mt-10 justify-center md:flex-row ">
                <div className="w-full flex-1 flex justify-center ">
                    <Image width={500} src={scene} alt="schoolAbout" />
                </div>
                <div className="flex-1 flex justify-end py-4 px-4">
                    <p className="">Our philosophy emphasizes quality education that balances academic rigor with extracurricular opportunities, encouraging students to explore their potential and build a strong foundation for their future endeavors. Join us on this journey of learning and growth, where every child is empowered to excel and achieve their dreams. Together, we nurture bright minds and inspire lifelong learners.</p>
                </div>
                </motion.div>
                </div>
            </div>}
            <div>

            </div>
            <Footer />
        </div>
    )
}

export default About