import React, { useEffect, useState } from 'react'
import { resources } from '../../constants'
import FileIcon from '../../assets/icon/FileIcon'
import DownloadIcon from '../../assets/icon/DownloadIcon'

const Resources = () => {
  const [size, setSize] = useState(32); // Default to small size

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth >= 768 ? 50 : 32); // Set size based on screen width
    };

    handleResize(); // Initial size calculation
    window.addEventListener('resize', handleResize); // Attach resize event listener

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  return (
    <div className="md:px-6 w-[90%] max-w-[750px] mx-auto">
      <div className="flex">
        <p className="font-[700] text-[20px] md:text-[28px] text-black">
          Files and Resources
        </p>
      </div>

      <div className="flex flex-col gap-5 mt-4 mb-6">
        {resources.map((item) => (
          <div key={item._id}
            className="flex flex-row justify-between items-center gap-3 md:gap-6 bg-[#EEF6FF] py-8 px-4 md:px-10 rounded-xl">
            <div className="flex gap-4">
              <FileIcon size={size} />

              <p className="font-[700] text-secondary text-[16px] md:text-[20px]">
                {item.value}
                <span className="pl-2">{item.name}</span>
              </p>
            </div>

            <DownloadIcon size={size} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Resources
