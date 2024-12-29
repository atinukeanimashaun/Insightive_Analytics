import React, { useContext, useEffect, useState } from 'react'
import LevelIcon from '../../assets/icon/LevelIcon';
import LengthIcon from '../../assets/icon/LengthIcon';
import LoadingIcon from '../../assets/icon/LoadingIcon';
import { BsChevronDown } from 'react-icons/bs';
import { AuthContext } from '../../contexts/AuthProvider';

// Reusable InfoCard Component
const InfoCard = ({ icon: Icon, label, value }) => (
  <div className="flex gap-3 pr-4">
    <div className="bg-[#E8F0FF] p-2 rounded-xl">
      <Icon />
    </div>
    <div>
      <p className="font-[500] text-secondary text-[20px] capitalize">{label}:</p>
      <p className="font-[600] text-black text-[20px] capitalize">{value}</p>
    </div>
  </div>
);

const Profiles = () => {
  const [size, setSize] = useState(32);
  const { currentUser, doSignOut } = useContext(AuthContext);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth >= 768 ? 50 : 32);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const avatarUrl =
    currentUser?.photoURL || "https://via.placeholder.com/150";
  const displayName = currentUser?.displayName || "User";

  return (
    <div className="py-8 md:pt-14 px-6 xl:px-20 w-full max-w-[950px] mx-auto">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-[700] text-black text-[40px] md:text-[56px] capitalize">
          my profile
        </h1>

        <img
          src={avatarUrl}
          alt="User Avatar"
          className="w-[200px] h-[200px] rounded-full border border-gray-300 cursor-pointer"
        />

        <h1 className="font-[700] text-black text-[24px] md:text-[36px] mt-4 capitalize">
          {displayName}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        {/* Info Section */}
        <div className="border-2 border-[#989898] rounded-lg p-7 flex flex-col md:flex-row items-start md:items-center gap-4 xl:gap-12 mt-10">
          <InfoCard icon={LevelIcon} label="level" value="intermediate" />
          <InfoCard icon={VideosIcon} label="videos" value="67" />
          <InfoCard icon={LengthIcon} label="length" value="5hr 52min" />
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <div>
          <p className="font-[700] text-[20px] md:text-[28px] text-black">
            Your Courses
          </p>
        </div>

        <div
          className="flex flex-row gap-3 md:gap-6 bg-[#EEF6FF] py-8 px-4 md:px-10 rounded-xl"
        >

          <LoadingIcon size={size} />

          {/* Video details */}
          <div className="space-y-2 flex-1">
            <p className="font-[700] text-secondary text-[16px] md:text-[20px]">
              1.
              <span className="pl-2">Navigating the course</span>
            </p>

            <p className="text-[#494949] text-[10px] md:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
          </div>

          {/* Video time */}
          <div className="flex flex-col items-center gap-3">
            <p className="bg-[#05F400] py-1.5 px-3 font-[700] text-[12px] md:text-[16px] rounded-full">
              in progress
            </p>

            <BsChevronDown />
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <button
        onClick={doSignOut}
        className="bg-secondary text-primary text-[16px] px-[20px] py-2 cursor-pointer hover:border hover:border-secondary hover:text-secondary hover:bg-transparent hover:-translate-y-2 duration-300 transition-all rounded-lg capitalize"
        >
          logout
        </button>
      </div>
    </div>
  )
}

export default Profiles