import React, { useCallback, useState } from 'react'
import { slides } from '../../constants';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Consulting = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="pb-8 md:pb-14 pt-[80px] px-6 xl:px-20 bg-[#EBECF5]">
      <div className="text-center">
        <h2 className="text-[28px] md:text-[36px] font-[600] text-black pb-2">
          Consulting
        </h2>

        <p className="text-[14px] text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="w-full relative">
        <div className="w-[80%] max-w-[600px] mx-auto h-[400px] flex flex-col items-center justify-center gap-4 py-6">
          <h2 className="text-red text-[18px] md:text-[24px] capitalize">{slides[currentIndex].title}</h2>
          <p className="text-black text-[14px] md:text-[20px] leading-[25px] md:leading-[33.6px] text-center">
            {slides[currentIndex].text}
          </p>
        </div>

        <div onClick={prevSlide} className="absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-2 md:left-5 cursor-pointer">
          <BsArrowLeftCircle size={30} />
        </div>

        <div onClick={nextSlide} className="absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-2 md:right-5 cursor-pointer">
          <BsArrowRightCircle size={30} />
        </div>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <div 
              key={index} 
              className={`w-2 md:w-3 h-2 md:h-3 rounded-full cursor-pointer transition-all duration-300 
                ${index === currentIndex ? 'bg-secondary' : 'bg-gray-400'}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Consulting
