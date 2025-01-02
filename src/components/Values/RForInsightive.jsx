import React from 'react'
import AboutImage4 from '../../assets/images/AboutImage4.png'
import { FaPlayCircle } from 'react-icons/fa'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

const RForInsightive = () => {
  const navigate = useNavigate();

  const handleVideoClick = () => {
    alert('Video clicked!');
  };

  const handleNextLesson = () => {
    navigate('/value-details/An Introduction to R for Policy Analysis');
  };

  return (
    <div>
      <div className="pb-12 border-b-2 border-b-[#929292]">
        <h2 className="font-[700] text-[30px] md:text-[48px] text-black">
          An Introduction to R for Policy Analysis
        </h2>

        <div className="relative cursor-pointer mt-10"
          onClick={handleVideoClick}>
          <img src={AboutImage4} alt="Video Thumbnail" className="w-full h-[550px] rounded-lg" />
          <FaPlayCircle className="absolute inset-0 m-auto text-white text-6xl opacity-75" />
        </div>

        <div className="mt-6">
          <p className="text-[16px] md:text-[18px] leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.Lorem ipsum dolor sit amet, consectetur
          </p>

          <p className="text-[16px] md:text-[18px] leading-7 pt-5">
            adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
          </p>
        </div>
      </div>

      <div className="pt-10 flex justify-end items-center">
        <div className="flex gap-3">
          <Link to="/course" className="flex items-center gap-1 border-b-2 border-b-[#4F4F4F] text-[#4F4F4F] font-[600] text-[16px] md:text-[18px] hover:text-secondary hover:border-b-secondary hover:-translate-y-4 duration-300 transition-all cursor-pointer">
            <IoIosArrowRoundBack className="w-8 h-8" />
            Back to course
          </Link>

          <button 
          onClick={handleNextLesson}
          className="flex items-center gap-1 px-4 py-2 font-[600] text-[16px] md:text-[18px] text-white bg-secondary hover:text-secondary hover:bg-transparent hover:border-2 border-secondary rounded-md hover:-translate-y-4 duration-300 transition-all cursor-pointer">
            Next Lesson
            <IoIosArrowRoundForward className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default RForInsightive
