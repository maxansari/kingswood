"use client"
import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import underLine from "../../../public/assets/underline.png";
import tree from "../../../public/tree.svg";
import sentImg from "../../../public/sent.svg";
import farid from "../../../public/farid-ansari.jpg";
import umesh from "../../../public/umesh.jpg";





const Contact = () => {
    const [sent, setSent] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        message: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


      const handleSubmit = async (e) => {
        e.preventDefault();
        emailjs
          .send(
            "service_abmiljj",
            "template_3kby2od",
            formData,
            "YwZz5MGVVR_-iagK3"
          )
          .then(
            (result) => {
                setFormData({ name: "", email: "",contact:" ", message: "" });
                setSent(true);
                console.log(result)
                console.log(sent);
            },
            (error) => {
              console.error("Failed to send message:", error);
              alert("Failed to send the message.");
            }
          );

         
      };



    return(
        <>
        
        <Header />
        {!sent?<div className="relative w-full overflow-hidden">
        <motion.div 
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.7}}
        whileInView={{opacity: 1, y: 0}}
        className="min-w-[200px] absolute top-1/4 left-1/2 md:left-1/2 -z-1000">
            <Image  src={tree} alt="tree" className="w-full opacity-60" />
        </motion.div>
        <motion.div
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.7}}
        whileInView={{opacity: 1, y: 0}}
        className="w-full z-10 flex justify-center flex-col items-center"> 
            <h1 className="text-center z-10 mt-10">Contact Us</h1>
            <Image className="z-10" src={underLine} alt="underline" width={200}/>


        </motion.div>
            <motion.div
            initial={{opacity: 0, y: 100}}
            transition={{duration: 0.7}}
            whileInView={{opacity: 1, y: 0}}
            className="w-full flex justify-center mx-auto mt-10">
                <form 
                onSubmit={handleSubmit}
                className="z-10 flex p-4 mb-10 md:p-0 w-full justify-center md:min-w-[400px] md:max-w-[600px] flex-col gap-4"
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input 
                        className="p-2 max-w-[600px] border border-gray-300 rounded-md" 
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input 
                        className="p-2 max-w-[600px] border border-gray-300 rounded-md" 
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="contact">Contact</label>
                        <input 
                        className="p-2 max-w-[600px] border border-gray-300 rounded-md" 
                        type="text"
                        name="contact"
                        placeholder="Your Contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message">Message</label>
                        <textarea 
                        className="p-2 border max-w-[600px] border-gray-300 rounded-md" 
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <button 
                    type="submit" className="bg-teal-700 hover:bg-teal-500 active:bg-teal-700 max-w-[600px] text-white py-2 rounded-md">Submit</button>
                </form>
            </motion.div>
            </div>:
            <div className="w-full flex justify-center items-center flex-col">
            <motion.div
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.7}}
            whileInView={{opacity: 1, y: 0}}
            className="w-full flex justify-center items-center flex-col">
                <div className="min-w-[200px] max-w-[400px]">
                <Image src={sentImg} alt="sent" />
                </div>
                <h1>Message Sent</h1>
                <p>We will get back to you as soon as possible</p>
                <button 
                onClick={()=>setSent(false)} 
                className="mt-6 bg-teal-700 hover:bg-teal-500 active:bg-teal-700 text-white py-2 px-4 rounded-md"
                >
                Ask Another Query
                </button>
            </motion.div>
        </div>
            }
            <div className="w-full flex flex-col justify-center items-center">
            <h1 className="">Contact Numbers</h1>
            <div className="flex flex-col p-4 w-full justify-center items-center md:flex-row gap-2">
                <div className="w-full sm:w-[300px] p-4 rounded-md shadow-lg border-2 py-8">
                    <Image src={farid} alt="farid" className="rounded-full" width={70}/>
                    <h3 className="">Farid Ansari</h3>
                    <p className="text-xl font-semibold">+919758880880</p>
                </div>
                <div className="w-full sm:w-[300px] p-4 rounded-md shadow-lg border-2 py-8">
                    <Image src={umesh} alt="umesh" className="rounded-full" width={70}/>
                    <h3 className="">Umesh</h3>
                    <p className="text-xl font-semibold">+918057373726</p>
                </div>

            </div>
            </div>
        <Footer />
        </>
    )
}

export default Contact;