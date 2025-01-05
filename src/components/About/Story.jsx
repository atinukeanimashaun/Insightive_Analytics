import React from 'react'
import AboutImage2 from '../../assets/images/AboutImage2.png'

const Story = () => {
  return (
    <div className="pt-24 pb-14 px-6 xl:px-[10rem]">
      <div className="text-center">
        <h2 className="text-[28px] md:text-[36px] lg:text-[56px] font-[700] text-black pb-2 capitalize">
          our origin story
        </h2>

        <p className="text-[14px] text-black">
          Explain what your company is working on and the value you provide to your customers.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 xl:gap-6 mt-10 md:mt-16 mb-5">
        <div className="md:w-1/2">
          <p className="text-secondary font-[600] text-[17px] lg:text-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucib
          </p>
        </div>

        <div className="md:w-1/2">
          <p className="text-[#757575] text-[17px] lg:text-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 mt-10 md:mt-16">
        <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-[30px] md:text-[48px] font-[700] capitalize">
          about
        </h2>
        <p className="text-[16px] xl:text-[18px] leading-[27px] pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.
          </p>

          <p className="text-[16px] xl:text-[18px] leading-[27px]">
            Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta. Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque.
          </p>
        </div>

        <div className="lg:w-1/2">
          <img src={AboutImage2} alt="aboutImage2" />
        </div>
      </div>
    </div>
  )
}

export default Story