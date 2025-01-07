"use client";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Marquee from "react-fast-marquee";
import Nw from '../../public/blink_new.gif';
import Image from "next/image";
import { db } from '../../libs/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";

const Anouncement = () => {
  const [loading, setLoading] = useState(true);
  const [anouncements, setAnouncements] = useState([]);
  const router = useRouter();

  // Simulate a loading period
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load
    return () => clearTimeout(timer);
  }, []);

  const getAnouncements = async () => {
    try {
      const anouncementsCol = collection(db, 'marque');
      const anouncementsSnapshot = await getDocs(anouncementsCol);
      const anouncementsList = anouncementsSnapshot.docs.map(doc => doc.data());
      setAnouncements(anouncementsList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAnouncements();
  }, []);

  const isAnnouncementOlderThan30Days = (timestamp) => {
    const currentDate = new Date();
    const anDate = timestamp.toDate(); // Convert Firestore Timestamp to JavaScript Date
    const diffTime = Math.abs(currentDate - anDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays < 30;
  };

  return (
    <>
      {loading ? (
        <Skeleton className="-z-10 bg-blue-900" height={40} />
      ) : (
        <Marquee pauseOnHover={true} className=" bg-blue-900" gradient={false} speed={30}>
          {anouncements.map(an => (
            <div
              key={an.id}
              onClick={() => { console.log('clicked'); router.push(an.marqueLink); }}
              className={`text-white flex gap-2 hover:cursor-pointer p-2 ${
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
            >
              {isAnnouncementOlderThan30Days(an.marqueDate) ? (
                <Image className="bg-white" src={Nw} width={20} alt="new" />
              ) : null}
              {an.marqueText}
            </div>
          ))}
        </Marquee>
      )}
    </>
  );
};

export default Anouncement;