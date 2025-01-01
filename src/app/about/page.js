"use client";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import bookRead from "../../../public/bookread.svg";
import underLine from "../../../public/assets/underline.png";
import scene from "../../../public/scene.svg";
import pattern from "../../../public/pattern.svg";
import {motion} from "framer-motion";

const about = () => {
    return (
        <div>
            <Header />
            <div className="w-full flex justify-center flex-col items-center"> 
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
                    <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="w-full flex-1 flex justify-center">
                    <Image width={300} src={bookRead} alt="schoolAbout" />
                </div>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }} 
                className="flex flex-col w-[80%] mx-auto mt-10 justify-center md:flex-row ">
                <div className="w-full flex-1 flex justify-center ">
                    <Image width={500} src={scene} alt="schoolAbout" />
                </div>
                <div className="flex-1 flex justify-end py-4 px-4">
                    <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                </motion.div>
            </div>
            <div>

            </div>
            <Footer />
        </div>
    )
}

export default about