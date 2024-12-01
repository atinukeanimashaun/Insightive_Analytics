import React from 'react'

const FilterPanel = ({ courseItems, filterItems, selectedCategory }) => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap md:justify-center items-center space-y-4 my-8 pb-5">
      <div className='flex flex-row justify-start md:items-center flex-wrap gap-2 md:gap-8'>
        {/* "All" button */}
        <button
          onClick={() => filterItems('all')}
          className={`capitalize font-semibold px-4 py-2 rounded-xl hover:-translate-y-2 duration-200 transition-all cursor-pointer ${selectedCategory === 'all'
              ? 'border border-secondary text-white bg-secondary hover:bg-secondary'
              : 'hover:bg-secondary hover:text-white'
            }`}
        >
          all
        </button>

        {courseItems.map((product) => (
          <button
            key={product}
            onClick={() => filterItems(product)}
            className={`capitalize font-semibold px-4 py-2 rounded-xl hover:-translate-y-2 duration-200 transition-all cursor-pointer ${
              selectedCategory === product
                ? ' border-secondary text-white bg-secondary hover:bg-secondary' 
                : 'hover:bg-secondary hover:text-white'
            }`}
          >
            {product}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterPanel
