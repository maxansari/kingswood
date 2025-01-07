"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { db } from "../../../libs/firebaseConfig";
import { collection, getDocs, query, orderBy, startAfter, limit } from "firebase/firestore";
import Image from "next/image";
import underLine from "../../../public/assets/underline.png";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastDoc, setLastDoc] = useState(null); // Track the last document for pagination
  const [hasMore, setHasMore] = useState(true); // Track if more images are available
  const itemsPerPage = 8;

  // Fetch images function
  const fetchImages = async () => {
    try {
      setLoading(true);
      const imagesCollection = collection(db, "gallery");
      let imagesQuery;

      if (!lastDoc) {
        // Initial load
        imagesQuery = query(imagesCollection, orderBy("uploadedAt", "desc"), limit(itemsPerPage));
      } else {
        // Fetch additional images after the last document
        imagesQuery = query(
          imagesCollection,
          orderBy("uploadedAt", "desc"),
          startAfter(lastDoc),
          limit(itemsPerPage)
        );
      }

      const querySnapshot = await getDocs(imagesQuery);
      const imagesList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      if (querySnapshot.docs.length < itemsPerPage) {
        // No more images to fetch
        setHasMore(false);
      }

      if (querySnapshot.docs.length > 0) {
        // Update the last document
        setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
      }

      setImages((prevImages) => [...prevImages, ...imagesList]);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  // Fetch initial images on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <Header />
      {loading && images.length === 0 ? (
        // Show skeleton loader during the initial load
        <>
          <div className="w-full flex justify-center flex-col items-center">
            <Skeleton width={150} height={20} />
            <Skeleton width={200} height={20} />
          </div>
          <div className="flex justify-center mx-auto">
            <div className="w-[80%]">
              <div className="grid grid-cols-2 mt-10 md:grid-cols-4 gap-4">
                {Array.from({ length: itemsPerPage }).map((_, index) => (
                  <div
                    key={index}
                    className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden"
                  >
                    <Skeleton className="object-cover h-[200px]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        // Show images after loading
        <>
          <div className="w-full flex justify-center flex-col items-center">
            <h1 className="text-center mt-10">Gallery</h1>
            <Image className="ali" src={underLine} alt="underline" width={200} />
          </div>
          <div className="flex justify-center mx-auto">
            <div className="w-[80%]">
              <div className="grid grid-cols-2 mt-10 md:grid-cols-4 gap-4">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden"
                  >
                    <a href={img.image_url.src} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={img.image_url}
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />
                    </a>
                  </div>
                ))}
              </div>
              {/* Load More Button */}
              {hasMore && (
                <div className="flex justify-center mt-6 space-x-4">
                  <button
                    className="bg-teal-500 text-white font-bold px-4 py-2 rounded"
                    onClick={fetchImages}
                  >
                    Load More
                  </button>
                </div>
              )}
              {!hasMore && (
                <p className="text-center mt-4 text-gray-500">No more images to load.</p>
              )}
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default Gallery;
