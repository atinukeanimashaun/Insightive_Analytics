import React from 'react'
import { learns } from '../../constants'

const WhatWeDo = () => {
  return (
    <div className="py-8 md:py-14 px-6 xl:px-20">
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-[30px] md:text-[48px] font-[700] text-black">
          Why Learn With us?
        </h2>

        <p className="text-[18px] text-center text-black leading-[27px] md:w-[75%] xl:w-[65%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>

      <div className="lg:w-1/2 grid max-w-xl mx-auto grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none md:grid-cols-2 xl:gap-y-16 mt-10 md:mt-20">
        {
          learns.map((item) => (
            <div key={item._id} className="flex flex-col gap-5 items-center text-center">
              <p className="bg-[#175CFF] p-5">
              {item.Icon && <item.Icon className="w-8 h-8 text-[#C7E8EF]"/>}
              </p>

              <p className="text-[#0A083A] font-[700] text-[18px] md:text-[24px]">
                {item.title}
              </p>

              <p className="text-[#646584] text-[14px] md:text-[16px] leading-[24px] lg:w-[90%]">
                {item.text}
              </p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default WhatWeDo