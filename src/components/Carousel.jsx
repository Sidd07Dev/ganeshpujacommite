
import { useState } from 'react';

const Carousel = () => {
  const images = [
    "https://res.cloudinary.com/codebysidd/image/upload/v1725128427/members/zvpeinevjyppwewkjt9r.jpg",
    "https://img.freepik.com/premium-photo/happy-ganesh-chaturthi-greeting-background_1037680-37503.jpg?semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/happy-ganesh-chaturthi-greeting-background_1037680-37495.jpg?semt=ais_hybrid",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="relative overflow-hidden shadow-lg hover-lift mt-4">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="min-w-full">
            <img src={src} alt={`Slider Image ${index + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white px-4 py-2 hover:bg-yellow-600 shadow-md rounded-l-lg">
        &#8592;
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white px-4 py-2 hover:bg-yellow-600 shadow-md rounded-r-lg">
        &#8594;
      </button>
    </section>
  );
};

export default Carousel;
