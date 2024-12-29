import React from 'react'

const Subscribe = () => {
  return (
    <div className="pb-8 md:pb-[80px] pt-[80px] px-6 xl:px-20 bg-[#EBECF5]">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-[25px] md:text-[36px] font-[600] text-black pb-2">
        Subscribe for <span className="text-red">updates</span>
        </h2>

        <p className="text-[14px] text-black w-full md:w-[40%] xl:w-[30%]  text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.        
        </p>

        <div className="pt-4 md:pt-8">
          <form className="flex gap-2 w-full">
            <input 
            type="email" 
            name="email" 
            id="email" 
            autoComplete="off"
            placeholder="Enter your email" 
            className="w-[55%] md:w-[65%]"
            />

            <button className="bg-secondary text-primary text-[16px] px-[16px] md:px-[30px] py-2 cursor-pointer hover:border hover:border-secondary hover:text-secondary hover:bg-transparent hover:-translate-y-2 duration-300 transition-all rounded-lg">
              Sign Up
            </button>
          </form>

        <p className="text-[12px] text-black pt-3">
        By clicking Sign Up you're confirming that you agree with our Terms and Conditions.
        </p>
        </div>
      </div>
      </div>
  )
}

export default Subscribe