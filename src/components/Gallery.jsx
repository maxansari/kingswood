"use client"
import Image from "next/image";
import headingLine from "../../public/assets/underline.png";
import thum1 from "../../public/assets/school/thum11.jpeg";
import thum2 from "../../public/assets/school/thum10.jpeg";
import thum3 from "../../public/assets/school/thum3.jpeg";
import thum4 from "../../public/assets/school/thum4.jpeg";
import thum5 from "../../public/assets/school/thum5.jpeg";
import { useRouter } from "next/navigation";

const Gallery = () => {

    const router = useRouter();


    return (
        <>
                <div className="flex justify-center">
    <div className="w-[80%]">
      <h1>Gallery</h1>
      <Image src={headingLine} alt="heading line" width={300} height={20}/>
        <div className="grid grid-cols-2 mt-10 md:grid-cols-4 gap-4">
    <div className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden">
      <Image
        src={thum1}
        alt=""
        fill
        className="object-cover"
      />
    </div>
    <div className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden">
      <Image
        src={thum2}
        alt=""
        fill
        className="object-cover"
      />
    </div>
    <div className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden">
      <Image
        src={thum3}
        alt=""
        fill
        className="object-cover"
      />
    </div>
    <div className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden">
      <Image
        src={thum4}
        alt=""
        fill
        className="object-cover"
      />
    </div>
    <div className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden">
      <Image
        src={thum5}
        alt=""
        fill
        className="object-cover"
      />
    </div>
      <button 
      onClick={()=>router.push('/gallery')}
      className="bg-teal-500 text-white font-bold">Go To Gallery-&gt;</button>
      
  </div>
      </div>
    </div>
        </>
    )
}

export default Gallery;