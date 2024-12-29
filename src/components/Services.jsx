import React from 'react'
import { services } from '../constants'

const Services = () => {
  return (
    <div className="py-8 md:pt-14 px-6 xl:px-20">
      <div className="flex flex-col items-center">
        <h2 className="text-[28px] md:text-[36px] xl:text-[56px] font-[600] text-black pb-2">
          Consulting Services
        </h2>

        <p className="text-[#6E6E6E] text-[16px] md:[18px] md:w-[80%] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 my-10 lg:px-10">
        {services.map((item) => (
          <div key={item._id} className="flex flex-col gap-3 md:gap-5 p-3">
            <img src={item.image} alt="item.image" />

            <h2 className="font-[700] text-[30px] lg:text-[49.61px] text-black">
              {item.name}
            </h2>

            <p className="text-[16px] md:text-[18px] leading-[27px] text-black">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services

