import React from 'react'
import { items } from '../../constants'

export const WhatWeDo = () => {
  const colors = ["bg-[#1E298D]", "bg-[#16AF8E]", "bg-[#922C40]"];

  return (
    <div className="pt-24 pb-14 px-6 xl:px-28">
      <div className="text-center">
        <h2 className="text-[28px] md:text-[36px] lg:text-[56px] font-[700] text-black pb-2">
          What we do
        </h2>

        <p className="text-[14px] text-black">
          Explain what your company is working on and the value you provide to your customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {items.map((item, index) => (
          <div key={item._id} className="px-4 pt-10 pb-5 shadow-lg bg-white flex flex-col gap-3">
            <p className="">
            {item.Icon && <item.Icon
            className={`w-12 h-12 text-[#C7E8EF] p-3 rounded-md  ${colors[index % colors.length]}`} 
             />}
            </p>

            <p className="text-secondary font-[700] text-[25px] md:text-[32px]">
              {item.title}
            </p>

            <p className="text-black text-[16px] lg:w-[90%]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
