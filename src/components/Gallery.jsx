"use client"
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {db} from '../../libs/firebaseConfig';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';import Image from "next/image";
import headingLine from "../../public/assets/underline.png";
import thum1 from "../../public/assets/school/thum18.jpeg";
import thum2 from "../../public/assets/school/thum17.jpeg";
import thum3 from "../../public/assets/school/thum16.jpeg";
import thum4 from "../../public/assets/school/thum15.jpeg";
import thum5 from "../../public/assets/school/thum14.jpeg";
import { useRouter } from "next/navigation";



const Gallery = () => {

    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);



    // Simulate a loading period
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load
      return () => clearTimeout(timer);
    }, []);

// get top 5 images from the database

  const getImages = async () => {
    try{
    const imagesCollection = collection(db, 'gallery');
    const imagesQuery = query(imagesCollection, orderBy('uploadedAt', 'desc'), limit(5));
    const querySnapshot = await getDocs(imagesQuery);
    const imagesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setImages(imagesList);
    console.log(imagesList);
    }catch(err){
      console.log(err);
    }

  };

    useEffect(() => {
      getImages();
    }
    ,[]);



    return (
        <>
                <div className="flex justify-center">
    <div className="w-[80%]">
      <h1 className="text-xl sm:text-3xl md:text-4xl">{loading?<Skeleton width={150}/> : "Gallery" }</h1>
      {loading?<Skeleton width={300} height={20} />:<Image className="w-[150px] sm:w-[180px] md:w-[200px] lg-[250px]" src={headingLine} alt="heading line" />}
        <div className="grid grid-cols-2 mt-10 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          loading ? (
            <div key={index} className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden">
            <Skeleton key={index} className="object-cover h-[200px]" />
          </div>
          ) : (
            <div key={index} className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden">
              <Image
                src={img.image_url}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          )
        ))}

      {loading?
      <div  className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden">
                  <Skeleton className="object-cover h-[200px]" />
        </div>
      :<button 
      onClick={()=>router.push('/gallery')}
      className="bg-teal-500 text-white font-bold">
        Go To Gallery-&gt;
        </button>}
      
  </div>
      </div>
    </div>
        </>
    )
}

export default Gallery;