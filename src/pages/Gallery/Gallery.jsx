import { useState, useEffect, useRef } from "react";

const TOTAL_IMAGES = 1207;
const IMAGE_PATH = "./textures/Foto";

const Gallery = () => {
  const [loadedImages, setLoadedImages] = useState(30); // Initial batch
  const [selectedImage, setSelectedImage] = useState(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && loadedImages < TOTAL_IMAGES) {
        setLoadedImages((prev) => Math.min(prev + 30, TOTAL_IMAGES));
      }
    });
    
    if (observerRef.current && document.getElementById("load-trigger")) {
      observerRef.current.observe(document.getElementById("load-trigger"));
    }

    return () => observerRef.current?.disconnect();
  }, [loadedImages]);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev < TOTAL_IMAGES - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : TOTAL_IMAGES - 1));
  };

  return (
    <div>
      <div className="ml-4 mr-8 pt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Array.from({ length: loadedImages }, (_, i) => (
          <img
            key={i + 1}
            src={`${IMAGE_PATH}(${i + 1}).jpg`}
            alt={`Foto ${i + 1}`}
            className="w-full h-auto object-cover rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick(i)}
            loading="lazy"
          />
        ))}
        {loadedImages < TOTAL_IMAGES && <div id="load-trigger" className="h-10 w-full"></div>}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <button onClick={handlePrev} className="absolute left-4 text-white text-2xl">⬅</button>
          <img
            src={`${IMAGE_PATH}(${selectedImage + 1}).jpg`}
            alt={`Foto ${selectedImage + 1}`}
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
          />
          <button onClick={handleNext} className="absolute right-4 text-white text-2xl">➡</button>
          <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white text-2xl">✖</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
