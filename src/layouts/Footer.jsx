import React from 'react'
import { LiaFacebookSquare, LiaInstagram } from 'react-icons/lia'
import { RiTwitterXLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { companyLinks, legalLinks, resourcesLinks } from '../constants';

const FooterLinkSection = ({ title, links }) => (
  <div className="flex flex-col items-start space-y-2">
    {/* {title && <h4 className="font-semibold text-lg mb-2">{title}</h4>} */}
    {links.map((item, index) => (
      <Link key={index} to={item.link} className="text-sm text-black hover:underline">
        {item.name}
      </Link>
    ))}
  </div>
);

const Footer = () => {
  return (
    <div className="mt-10 p-5">
      <div className="grid grid-cols lg:grid-cols-4 gap-8 justify-items-center mb-5 pb-5 px-8">
        <div className='flex flex-col items-center md:w-[50%] lg:w-full border-b lg:border-b-0 border-b-secondary'>
          <Link to="/"
            className="uppercase text-secondary md:text-[16px] xl:text-xl font-thin cursor-pointer flex flex-col ">
            insightive analytics
          </Link>

          <p className='pt-5 text-lg  text-center'>
            Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.
          </p>

          <div className='flex space-x-3 mt-8 cursor-pointer mb-12'>
            <LiaFacebookSquare className='w-10 h-10' />
            <RiTwitterXLine className='w-8 h-8 mt-1' />
            <LiaInstagram className='w-10 h-10' />
          </div>
        </div>
        
        <FooterLinkSection links={companyLinks} />
        <FooterLinkSection links={resourcesLinks} />
        <FooterLinkSection links={legalLinks} />
        

      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-xl 2xl:px-[20rem] border-t-[1px] border-t-secondary pt-8 pb-10">
        <p> © Designed by <span className="font-semibold capitalize">tinu</span>.</p>
        <p className="capitalize">licenses</p>
      </div>
    </div>
  )
}

export default Footer
