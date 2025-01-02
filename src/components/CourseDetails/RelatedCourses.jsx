import React from 'react'
import { courses } from '../../constants'
import { useNavigate } from 'react-router-dom';

const RelatedCourses = () => {
  const navigate = useNavigate();

  const handleItems = (id) => {
    navigate(`/course-details/${id}`);
  };

  return (
    <div className="pb-8 md:pb-14 pt-[80px] px-6 xl:px-20">
      <div className="text-center">
        <h2 className="text-[30px] md:text-[48px] font-[600] text-black pb-2 capitalize">
        related courses
        </h2>

        <p className="text-[14px] text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      {courses
      .filter((item) => ["16", "4", "6"].includes(item._id))
      .map((item) => (
        <div key={item.id} className="flex flex-col border-[1px] border-[#DBDBDB] rounded-xl">
        <div className=" p-5 space-y-4" 
        onClick={() => handleItems(item._id)}>
          <img src={item.image} alt="item.image" 
          className=" w-[520px] h-[300px] rounded-xl object-cover" 
          />

          <button className="py-1 px-3 bg-grey text-black text-[16px] font-[500] rounded-2xl capitalize">
            {item.category}
          </button>

          <h2 className="text-[18px] font-[600] leading-[25.2px] text-black xl:w-[70%]">
            {item.title}
          </h2>

          <p className="text-[16px] leading-[24px] text-black">
            {item.text}
          </p>

          <div className="flex gap-2 items-center">
            <img src={item.avatar} alt="item.avatar"
              className="w-10 h-10 rounded-full object-cover"
            />

            <p className="text-[#6D6C80] text-[15px]">
              {item.name}
            </p>
          </div>
        </div>

        <div className="p-5 border-t-[1px] border-t-[#DBDBDB] flex flex-row justify-between">
          <div className="flex items-center gap-2">
            {item.Icon && <item.Icon className="w-4 h-4 text-[#121212]" />}
            <p>
              {item.time}
            </p>
          </div>

          <div className="flex gap-1 items-center">
            <p className="text-[14px] text-[#7F7E97] ">
              $20.00
            </p>

            <p className="text-secondary text-[18px] font-[600]">
              ${item.price}
            </p>
          </div>
        </div>
      </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedCourses