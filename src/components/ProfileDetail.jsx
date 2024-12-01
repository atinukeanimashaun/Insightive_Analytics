import React from 'react'
import Link from '../assets/images/icon/Link'
import LinkedIn from '../assets/images/icon/LinkedIn'
import Instagram from '../assets/images/icon/Instagram'
import Facebook from '../assets/images/icon/Facebook'

const ProfileDetail = ({ items }) => {

  return (
    <div className="pt-24 pb-16 px-6 md:px-14 xl:px-28">
      <div className="bg-[#EBECF5] py-8 px-8 xl:px-14 rounded-xl flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="space-y-3 xl:w-1/2">
          <div className="bg-white w-[155px] h-[155px] flex items-centers justify-center rounded-full">
            <img src={items.image}
              alt="items.image"
              class="rounded-full w-[150px] h-[150px] object-cover" />
          </div>

          <h2 className="text-[25px] md:text-[30px] font-[700] text-secondary">
            {items.name}
          </h2>

          <div className="flex gap-2 md:gap-4">
            <p className="text-[14px] md:text-[18px] font-[700] text-black">
              {items.category}
            </p>

            <div className="border-[1px] border-black py-3" />

            <p className="text-[14px] md:text-[18px] font-[700] text-black">
              {items.school}
            </p>
          </div>

          <div className="flex gap-3 mt-6">
            <Link />
            <LinkedIn />
            <Instagram />
            <Facebook />
          </div>
        </div>

        <div className="space-y-2  lg:w-1/2">
          <h2 className="font-[700] text-[20px]">
            Bio
          </h2>

          <p className="text-[16px] xl:text-[20px] leading-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.Lorem ipsum dolor sit ameLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.  Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetail