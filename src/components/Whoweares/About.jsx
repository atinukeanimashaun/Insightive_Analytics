import React from 'react'
import Image7 from '../../assets/images/Image7.png'
import AboutImage3 from '../../assets/images/AboutImage3.png'

const AboutUs = () => {
  return (
    <div className="py-8 md:py-14 px-6 xl:px-20">
       <div className="text-center">
        <h2 className="text-[28px] md:text-[36px] lg:text-[56px] font-[700] text-black pb-2 capitalize">
          who we are
        </h2>

        <p className="text-[14px] text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5 mt-10 md:mt-24">
        <div className="lg:w-1/2 relative">
          <img src={AboutImage3} alt="aboutImage" className="relative z-10" />

          <div className="hidden xl:block absolute -bottom-16 -right-6 z-0 pt-2">
            <img src={Image7} alt="image7" />
          </div>
        </div>

        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[30px] md:text-[48px] font-[700]">
            Who we we are
          </h2>

          <p className="text-[16px] xl:text-[18px] leading-[27px] pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.
          </p>

          <p className="text-[16px] xl:text-[18px] leading-[27px]">
            Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta. Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
