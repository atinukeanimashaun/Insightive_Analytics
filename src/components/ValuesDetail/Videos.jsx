import React, { useEffect, useState } from 'react';
import { vidoes } from '../../constants';

const Videos = () => {
  const [size, setSize] = useState(32); // Default to small size

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth >= 768 ? 50 : 32); // Set size based on screen width
    };

    handleResize(); // Initial size calculation
    window.addEventListener('resize', handleResize); // Attach resize event listener

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  // Common section rendering
  const renderModule = (moduleTitle, videos) => (
    <div className="pt-5 pb-3">
      <div className="flex">
        <p className="font-[700] text-[20px] md:text-[28px] text-black">
          {moduleTitle}
          <span className="font-[400] text-[20px] md:text-[28px] text-black pl-1">
            Course Intro and Set-up
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-5 mt-4 mb-6">
        {videos.map((item) => (
          <div
            key={item._id}
            className="flex flex-row gap-3 md:gap-6 bg-[#EEF6FF] py-8 px-4 md:px-10 rounded-xl"
          >
            {/* Render Icon if available */}
            {item.Icon && (
              <p>
                <item.Icon size={size} className="text-secondary" />
              </p>
            )}

            {/* Video details */}
            <div className="space-y-2 flex-1">
              <p className="font-[700] text-secondary text-[16px] md:text-[20px]">
                {item.value}
                <span className="pl-2">{item.name}</span>
              </p>
              <p className="text-[#494949] text-[10px] md:text-[14px]">
                {item.text}
              </p>
            </div>

            {/* Video time */}
            <p className="font-[700] text-[14px] md:text-[18px] text-black">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="md:px-6 w-[90%] max-w-[750px] mx-auto">
      {renderModule('Module 1:', vidoes)}
      {renderModule('Module 2:', vidoes)}
    </div>
  );
};

export default Videos;
