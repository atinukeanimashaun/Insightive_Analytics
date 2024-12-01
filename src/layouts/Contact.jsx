import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="pb-8 md:pb-[80px] pt-[80px] px-6 xl:px-20 bg-[#EBECF5]">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-[25px] md:text-[36px] font-[600] text-black pb-2 capitalize">
          <span className="text-red">contact</span> us
        </h2>

        <p className="text-[14px] text-black w-full md:w-[40%] xl:w-[30%]  text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>

        <Link to="/contactus" className="bg-secondary text-primary text-[16px] capitalize px-[16px] md:px-[30px] py-2 mt-2 md:mt-4 cursor-pointer hover:border hover:border-secondary hover:text-secondary hover:bg-transparent hover:-translate-y-2 duration-300 transition-all rounded-md">
          contact us
        </Link>
      </div>
    </div>
  )
}

export default Contact