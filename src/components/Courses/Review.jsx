import React, { useCallback, useState } from 'react'
import { reviews } from '../../constants';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="pb-8 md:pb-14 pt-[80px] px-6 xl:px-20 bg-[#EBECF5]">
      <div className="text-center">
        <h2 className="text-[30px] md:text-[40px] font-[600] text-black pb-2">
          Reviews
        </h2>
      </div>

      <div className="w-full relative">
        <div className="w-[90%] max-w-[750px] mx-auto h-[400px] flex flex-col items-center justify-center gap-4 py-6 ">
          <p className="text-black text-[18px] md:text-[24px] leading-[25px] md:leading-[33.6px] text-center">
            "{reviews[currentIndex].text}"
          </p>

          <div className=" flex flex-col items-center mt-6">
            <img
              src={reviews[currentIndex].avatar}
              alt="Reviewer avatar"
              className="w-15 h-15 rounded-full object-cover"
            />

            <p className="text-[#1E298D] text-[16px] font-[600] capitalize pt-3 pb-1.5">
              {reviews[currentIndex].name} 
            </p>

            <div className="flex gap-1 text-[16px] text-[#767676] pb-10">
              <p>
                {reviews[currentIndex].position}
                </p> 
              <p>
                {reviews[currentIndex].company}
                </p> 
            </div>
          </div>
        </div>

        <div onClick={prevSlide} className="absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-2 md:left-5 cursor-pointer">
          <BsArrowLeftCircle size={30} />
        </div>

        <div onClick={nextSlide} className="absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-2 md:right-5 cursor-pointer">
          <BsArrowRightCircle size={30} />
        </div>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
          {reviews.map((_, index) => (
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

export default Review
