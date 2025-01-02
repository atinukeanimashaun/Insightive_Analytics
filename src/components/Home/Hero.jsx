import React from 'react'
import Image2 from '../../assets/images/Image2.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative">
        <img src={Image2} alt="image2" className="w-full h-full object-cover" />
      </div>

      <div className="w-full h-full absolute top-0 left-0 bg-black/10" />

      <div className="space-y-2 md:space-y-4 absolute inset-0 flex flex-col justify-center px-5 lg:px-10">
        <h2 className="font-[800] text-[24px] md:text-[35px] lg:text-[50px] xl:text-[62px] text-primary leading-[30px] lg:leading-[74.4px] w-full md:w-[60%] xl:w-[50%]">
          Practical data science for real-world insightive analysis
        </h2>

        <p className="w-full md:w-[60%] xl:w-[45%] text-[12px] md:text-[18px] text-primary leading-[18px] md:leading-[27px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>

        <div className="space-x-4 pt-1 md:pt-3">
          <Link to="/blog" className="bg-secondary text-primary text-[12px] lg:text-[16px] py-2 md:py-3 px-6 lg:px-10 hover:border-[1px] hover:border-secondary hover:bg-transparent rounded-md hover:-translate-y-4 duration-300 transition-all cursor-pointer">
          Insights
          </Link>

          <Link to="/consulting" className="bg-green text-primary text-[12px] lg:text-[16px] py-2 md:py-3 px-6 lg:px-10 hover:border-[1px] hover:border-green hover:bg-transparent rounded-md hover:-translate-y-4 duration-300 transition-all cursor-pointer">
          Consulting
          </Link>

          <Link to="/course" className="bg-red text-primary text-[12px] lg:text-[16px] py-2 md:py-3 px-6 lg:px-10 hover:border-[1px] hover:border-red hover:bg-transparent rounded-md hover:-translate-y-4 duration-300 transition-all cursor-pointer">
          Courses
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
