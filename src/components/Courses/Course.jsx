import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import FilterPanel from './FilterPanel'
import { courses } from '../../constants';

const Course = () => {
  const navigate = useNavigate();
  const [itemsPerPage] = useState(9);
  const productGridRef = useRef(null);
  const [items, setItems] = useState(courses);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const page = parseInt(searchParams.get('page')) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  const handleItems = (id) => {
    navigate(`/course-details/${id}`);
  };

  const filterItems = (category) => {
    const filtered = category === "all" ? courses : courses.filter(item => item.category === category);
    setItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
    setSearchParams({ page: 1 });
  };

  const courseItems = [...new Set(courses.map(item => item.category))];

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
    <div className="py-8 md:py-14 px-6 xl:px-20">
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-[28px] md:text-[36px] lg:text-[56px] font-[700] text-black pb-2">
          Available Courses
        </h2>

        <p className="text-[16px] text-black lg:w-[60%] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>

        {/* <Link to="/"
          className="hover:text-secondary text-[16px] font-[600] capitalize py-4 px-11 border-[1px] hover:border-secondary hover:bg-transparent text-white bg-secondary rounded-lg hover:-translate-y-4 duration-300 transition-all cursor-pointer mt-4"
        >
          View Courses
        </Link> */}
      </div>

      <div className="mt-4 pt-6">
        <FilterPanel
          courseItems={courseItems}
          filterItems={filterItems}
          selectedCategory={selectedCategory}
          items={items}
        />

        <div ref={productGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-start mt-5">
          {currentItems.map(item => (
            <div key={item._id} className="flex flex-col ite border-[1px] border-[#DBDBDB] rounded-xl">
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
      </div>

    </div>
  )
}

export default Course