import React from 'react';
import image20 from '../../assets/images/image20.png';
import LevelIcon from '../../assets/icon/LevelIcon';
import VideosIcon from '../../assets/icon/VideosIcon';
import LengthIcon from '../../assets/icon/LengthIcon';

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

const Hero = ({ id }) => {
  return (
    <div className="py-8 md:pt-14 px-6 xl:px-20">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Image Section */}
        <img src={image20} alt="Course Thumbnail" />

        {/* Title and Description Section */}
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="font-[700] text-[35px] md:text-[48px] lg:w-[65%]">{id}</h2>
          <p className="text-[16px] md:text-[18px] leading-[27px] text-[#707070] md:w-[80%] xl:w-[65%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>

        {/* Info Section */}
        <div className="border-2 border-[#989898] rounded-lg p-7 flex flex-col md:flex-row items-start md:items-center gap-4 xl:gap-12 mt-10">
          <InfoCard icon={LevelIcon} label="level" value="intermediate" />
          <InfoCard icon={VideosIcon} label="videos" value="67" />
          <InfoCard icon={LengthIcon} label="length" value="5hr 52min" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
