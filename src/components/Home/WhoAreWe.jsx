import React from 'react'
import image1 from '../../assets/images/image1.png'
import image7 from '../../assets/images/image7.png'

const WhoAreWe = () => {
  return (
      <div className="pt-24 pb-14 px-6 xl:px-28 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 bg-primary">
        <div className="md:w-1/2 relative">
          <div className="hidden xl:block absolute -top-16 -left-14 z-0 pt-2">
            <img src={image7} alt="image7" />
          </div>

          <img src={image1} alt="image1" className="relative z-10" />
        </div>

        <div className="space-y-1 md:w-1/2">
          <h2 className="font-[700] text-[20px] md:text-[35px] lg:text-[48px] text-black leading-[57.4px]">
            Who we are
          </h2>

          <p className="text-lg xl:w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque
          </p>
        </div>
      </div>
  )
}

export default WhoAreWe
