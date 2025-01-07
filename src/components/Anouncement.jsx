"use client"
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Marquee from "react-fast-marquee";
import Nw from '../../public/blink_new.gif';
import Image from "next/image";
import {db} from '../../libs/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";


const Anouncement = () => {

    const [loading, setLoading] = useState(true);
    const [anouncements, setAnouncements] = useState([]);

    // Simulate a loading period
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load
        return () => clearTimeout(timer);
    }, []);

    const getAnouncements = async () => {
            const anouncementsCol = collection(db, 'marque');
            const anouncementsSnapshot = await getDocs(anouncementsCol);
            const anouncementsList = anouncementsSnapshot.docs.map(doc => doc.data());
            setAnouncements(anouncementsList);
        }

    useEffect(() => {


        getAnouncements();
    }   
    ,[]);

    return (
        <>
        {loading ? 
                <Skeleton className="-z-10 bg-blue-900" height={30} />
             : 
        <Marquee className="-z-10 bg-blue-900" pauseOnHover={true} pauseOnClick={true} gradient={false}>
                {anouncements.map(an=><div
              key={an.id}
              className={`text-white flex gap-2 p-2 ${
                an.marqueColor?.value === 'red'
                  ? 'bg-red-500'
                  : an.marqueColor?.value === 'green'
                  ? 'bg-green-500'
                  : an.marqueColor?.value === 'blue'
                  ? 'bg-blue-500'
                  : an.marqueColor?.value === 'yellow'
                  ? 'bg-yellow-600'
                  : 'bg-orange-500'
              }`}
            ><Image className="bg-white" src={Nw} width={20} alt="new" ></Image> {an.marqueText} </div>)}
        </Marquee>}
        </>
    )
}


export default Anouncement;


