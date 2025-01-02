"use client"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState, useEffect } from 'react'

const Map = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a loading period
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton className="ml-auto mr-32" width={200} height={200} style={{ display: 'block' }} />
      ) : (
        <iframe
          className="w-[300px] h-[200px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4011.8123693297543!2d77.83219191155952!3d28.413417375684205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ca353589f1623%3A0xfec56659a5810cf9!2sKINGSWOOD%20PUBLIC%20SCHOOL!5e1!3m2!1sen!2sin!4v1731587925142!5m2!1sen!2sin"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </>
  );
}

export default Map;