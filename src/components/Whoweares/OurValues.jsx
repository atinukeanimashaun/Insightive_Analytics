import React from 'react'
import aboutImage4 from '../../assets/images/aboutImage4.png'
import { values } from '../../constants'

const OurValues = () => {
  return (
    <div className="py-8 md:py-14 px-6 xl:px-20">
      <div className="text-center">
        <h2 className="text-[28px] md:text-[36px] lg:text-[56px] font-[700] text-black pb-2 capitalize">
          Our values
        </h2>

        <p className="text-[14px] text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5 mt-10 md:mt-24">
        <div className="lg:w-1/2">
        <img src={aboutImage4} alt="" />
        </div>

        <div className="lg:w-1/2 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none md:grid-cols-2 xl:gap-y-16">
          {
          values.map((value) => (
            <div key={value._id} className="flex flex-col gap-3">
              <p className="bg-secondary text-white text-center w-[35px] h-[35px] rounded-full pt-[5px]">
                {value.value}
              </p>

              <h2 className="text-[18px] xl:text-[28px] font-[700] text-black">
                {value.name}
              </h2>

              <p className="text-[16px] text-[#646584] leading-[24px]">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurValues
