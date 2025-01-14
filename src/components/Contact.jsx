import React from 'react'
import Image15 from '../assets/images/Image15.png'

const Contact = () => {
  return (
    <div className="py-8 md:py-14 px-6 xl:px-[10rem]">
      <div className="text-center">
        <h2 className="text-[28px] md:text-[36px] lg:text-[56px] font-[700] text-black pb-2">
          Get in touch
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-20 mt-10 md:mt-24">
        <div className="">
          <form>
            <div>
              <h2 className="text-[20px] md:text-[36px] xl:text-[48px] text-secondary font-[700]">
                Contact us
              </h2>

              <p className="text-[#6E6E6E] text-[16px] md:text[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-8 mb-4">
              <label htmlFor="name" className="font-[500] text-[14px] md:text-[16px] text-black capitalize">
                name
              </label>
              <input 
              type="name" 
              name="name" 
              id="name"
              className="rounded-lg outline-none border border-gray-300 p-2"
              />
            </div>
 
            <div className="flex flex-col gap-4 mb-4">
              <label htmlFor="email" className="font-[500] text-[14px] md:text-[16px] text-black capitalize">
                email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="rounded-lg outline-none border border-gray-300 p-2"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="name" className="font-[500] text-[14px] md:text-[16px] text-black capitalize">
                message
              </label>
              <textarea 
              name="message" 
              id="message" 
              cols="30"
              rows="8"
              className="rounded-lg outline-none border border-gray-300 p-2"
              >
              </textarea>
            </div>

            <div className="mt-6">
            <button className="bg-secondary text-primary text-[16px] px-[16px] md:px-[35px] py-2 cursor-pointer hover:border hover:border-secondary hover:text-secondary hover:bg-transparent hover:-translate-y-2 duration-300 transition-all rounded-lg">
              Submit
            </button>
            </div>
          </form>
        </div>

        <div className="w-full">
          <img src={Image15} alt="image15" />
        </div>
      </div>
    </div>
  )
}

export default Contact
