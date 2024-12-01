import React, { useEffect, useRef, useState } from 'react'
import FilterPanel from './FilterPanel'
import { blogs } from '../../constants';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const Insights = () => {
  const navigate = useNavigate();
  const [itemsPerPage] = useState(9);
  const productGridRef = useRef(null);
  const [items, setItems] = useState(blogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const page = parseInt(searchParams.get('page')) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  const handleItemsClick = (id) => {
    navigate(`/item/${id}`);
  };

  const filterItems = (category) => {
    const filtered = category === "all" ? blogs : blogs.filter(item => item.category === category);
    setItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
    setSearchParams({ page: 1 });
  };

  const menuItems = [...new Set(blogs.map(item => item.category))];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSearchParams({ page: pageNumber });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  return (
    <div className="pb-8 md:pb-[80px] pt-[80px] px-6 xl:px-20">
      <FilterPanel
        menuItems={menuItems}
        filterItems={filterItems}
        selectedCategory={selectedCategory}
        items={items}
      />

      <div ref={productGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-start mt-5">
        {currentItems.map(item => (
          <div key={item.id} className="flex flex-col gap-6"
            onClick={() => handleItemsClick(item._id)}>
            <img
              src={item.image}
              alt={item.title}
              className="[200px] h-[300px] object-cover rounded-lg"
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

      <div className='flex justify-center my-8'>
        {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-secondary text-white" : "bg-[#1c278b] text-white"}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-5 my-10 md:my-14">
        <h2 className="font-[700] text-[30px] md:text-[48px]">
          Write for us:
        </h2>

        <p className="text-[16px] text-[#808080] text-center leading-[27px] lg:w-[70%] xl:w-[50%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>

        <Link to="/contactus" className="bg-secondary text-primary text-[16px] px-[16px] md:px-[30px] py-2 cursor-pointer hover:border hover:border-secondary hover:text-secondary hover:bg-transparent hover:-translate-y-2 duration-300 transition-all rounded-lg">
          learn more
        </Link>
      </div>
    </div>
  )
}

export default Insights
