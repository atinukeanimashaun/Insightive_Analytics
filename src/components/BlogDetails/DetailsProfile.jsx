import React from 'react'
import Link from '../../assets/images/icon/Link'
import LinkedIn from '../../assets/images/icon/LinkedIn'
import Instagram from '../../assets/images/icon/Instagram'
import Facebook from '../../assets/images/icon/Facebook'
import { useNavigate } from 'react-router-dom'

const DetailsProfile = ({ items }) => {
  const navigate = useNavigate();

  if (!items) {
    return <p>No item data found.</p>;
  }

  const handleItemsClick = (id) => {
    navigate(`/profile-details/${id}`); 
  };
 
  return (
    <div className="bg-[#EBECF5] pt-24 pb-16 px-6 md:px-14 xl:px-28">
      <div className="flex flex-col md:flex-row gap-4 items-center mb-14 xl:pl-10">
        <img
          src={items.image}
          alt="items.image"
          class="rounded-full w-[150px] h-[150px] object-cover"
        />

        <div className="space-y-3">
          <h2 className="font-[700] text-[24px] leading-[33.6px] text-black">
            {items.name}
          </h2>

          <p className="text-[16px] xl:text-[20px] text-[#515151] leading-6 xl:w-[75%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.Lorem ipsum dolor sit ame
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[18px] font-[600] leading-4">
            Share this post
          </h2>

          <div className="flex gap-3 mt-6">
            <Link />
            <LinkedIn />
            <Instagram />
            <Facebook />
          </div>
        </div>

        <div>
          <button onClick={() => handleItemsClick(items._id)}
          className="bg-secondary text-primary text-[16px] px-[16px] md:px-[30px] py-2 cursor-pointer hover:border hover:border-secondary hover:text-secondary hover:bg-transparent hover:-translate-y-2 duration-300 transition-all rounded-lg capitalize">
            more details
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetailsProfile
