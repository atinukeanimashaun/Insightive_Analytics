import React from 'react'
import image7 from '../assets/images/image7.png'
import image15 from '../assets/images/image15.png'

const Contact = () => {
  return (
    <div className="py-8 md:py-14 px-6 xl:px-20">
      <div className="text-center">
        <h2 className="text-[28px] md:text-[36px] lg:text-[56px] font-[700] text-black pb-2">
          Get in touch
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-5 mt-10 md:mt-24">
        <div className="lg:w-1/2">
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

        <div className="lg:w-1/2 relative">
          <img src={image15} alt="image15" className="relative z-10" />

          <div className="hidden xl:block absolute -bottom-16 -right-6 z-0 pt-2">
            <img src={image7} alt="image7" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
