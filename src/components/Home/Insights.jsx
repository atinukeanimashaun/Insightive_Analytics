import React from 'react'
import { blogs } from '../../constants'
import { Link, useNavigate } from 'react-router-dom'

const Insights = () => {
  const navigate = useNavigate();

  const handleItemsClick = (id) => {
    navigate(`/item/${id}`);
  };

  return (
    <div className="py-8 md:py-14 px-6 xl:px-[10rem]">
      <div className="text-center">
        <h2 className="text-[28px] md:text-[36px] font-[600] text-black pb-2">
          Insights
        </h2>

        <p className="text-[14px] text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        {blogs.slice(0, 4).map((item) => (
          <div key={item._id} className="flex flex-col md:flex-row gap-6 border-[1px] border-[#DBDBDB] rounded-xl p-5"
          onClick={() => handleItemsClick(item._id)}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto md:w-1/3 object-cover rounded-lg" // Responsive image size
            />

            <div className="space-y-3 md:space-y-4 flex-1">
              <p className="text-[12px] md:text-[14px] text-black">
                <span className="font-[600] text-[12px] md:text-[14px] text-black pr-1">Category:</span>
                {item.category}
              </p>

              <h2 className="font-[700] text-[18px] md:text-[20px] xl:text-[24px] text-black leading-[33px]">
                {item.title}
              </h2>

              <p className="text-[14px] md:text-[16px] leading-[24px]">
                {item.text}
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div className="flex flex-col justify-center gap-1">
                  <p className="font-[600] text-[12px] md:text-[14px] text-black">
                    {item.name}
                  </p>

                  <div className="flex gap-3 items-center text-[12px] md:text-[14px]">
                    <p className="flex items-center gap-1">
                      {item.Icon && <item.Icon className="w-4 h-4 text-gray-500" />}
                      {item.date}
                    </p>

                    <div className="bg-black rounded-full p-1" />

                    <p>{item.time}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <Link to="/blog"
        className="text-secondary text-[16px] font-[600] capitalize py-4 px-11 border-[1px] border-secondary hover:text-white hover:bg-secondary rounded-lg hover:-translate-y-4 duration-300 transition-all cursor-pointer"
        >
          view all
        </Link>
      </div>
    </div>
  )
}

export default Insights
